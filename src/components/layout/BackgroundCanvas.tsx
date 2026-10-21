import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import styles from './BackgroundCanvas.module.scss';

/**
 * Ambient falling-code backdrop.
 *
 * Deliberately quiet: a sparse set of short code fragments drifting down at
 * low opacity. It reads as terminal texture, never as the subject. Pauses when
 * the tab is hidden, caps the pixel ratio, runs at ~30fps, and paints a single
 * static frame when the visitor prefers reduced motion.
 */

const SNIPPETS = [
  'ssh ed@edoutput.dev',
  'git push origin main',
  'npm run build',
  'SELECT * FROM projects;',
  'const ship = () => done',
  'docker compose up -d',
  'curl -s edoutput.dev',
  'dotnet run --project api',
  'az deployment group create',
  'kubectl get pods -A',
  'pnpm add @edoutput/ui',
  'GOOS=linux go build ./...',
  'export default function App',
  'POST /api/v1/projects 201',
  'chmod +x deploy.sh',
  'systemctl restart tunnel',
  'git rebase --interactive',
  'ng build --configuration prod',
] as const;

const FONT_SIZE = 14;
const ROW_HEIGHT = 18;
const MIN_COLUMN_WIDTH = 30;
const TARGET_FPS = 30;
const FRAME_MS = 1000 / TARGET_FPS;
const ALPHA_DARK = 0.15;
const ALPHA_LIGHT = 0.24;

interface Rgb {
  r: number;
  g: number;
  b: number;
}

interface Stream {
  head: number;
  speed: number;
  text: string;
  dim: number;
}

function parseRgb(raw: string): Rgb | null {
  if (raw.startsWith('#')) {
    const hex = raw.slice(1);
    const full =
      hex.length === 3
        ? hex
            .split('')
            .map((char) => char + char)
            .join('')
        : hex;
    const value = Number.parseInt(full, 16);
    if (Number.isFinite(value)) {
      return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 };
    }
  }

  const parts = raw.match(/\d+(\.\d+)?/g);
  if (parts && parts.length >= 3) {
    return { r: Number(parts[0]), g: Number(parts[1]), b: Number(parts[2]) };
  }

  return null;
}

function readProperty(property: string): Rgb | null {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(property).trim();
  return raw ? parseRgb(raw) : null;
}

function readRainColor(): Rgb {
  const rain = readProperty('--code-rain');
  if (rain) return rain;

  const accentText = readProperty('--accent-text');
  if (accentText) return accentText;

  // Last resort: keep the backdrop legible on whichever ground is active.
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? { r: 26, g: 26, b: 26 }
    : { r: 51, g: 255, b: 102 };
}

function pickSnippet(): string {
  return SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !context) return;

    let width = 0;
    let height = 0;
    let columnWidth = MIN_COLUMN_WIDTH;
    let columnCount = 0;
    let rows = 0;
    let streams: Stream[] = [];
    let rain = readRainColor();
    let maxAlpha = document.documentElement.getAttribute('data-theme') === 'light' ? ALPHA_LIGHT : ALPHA_DARK;
    let raf = 0;
    let lastFrame = 0;
    let disposed = false;
    let resizeTimer = 0;

    const visibleRows = () => Math.ceil(height / ROW_HEIGHT) + 1;

    const makeStream = (initial: boolean): Stream => ({
      head: initial ? Math.random() * visibleRows() : -Math.random() * 10 - 2,
      speed: 3 + Math.random() * 3.5,
      text: pickSnippet(),
      dim: 0.45 + Math.random() * 0.55,
    });

    const buildStreams = (count: number) => {
      streams = Array.from({ length: count }, () => makeStream(true));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maxColumns = width < 640 ? 18 : 56;
      const count = Math.max(6, Math.min(maxColumns, Math.floor(width / MIN_COLUMN_WIDTH)));
      columnWidth = width / count;
      rows = visibleRows();

      // Only rebuild columns when the width actually changes; mobile browsers
      // fire resize when the URL bar collapses, and rebuilding would cause a
      // visible jump mid-scroll.
      if (count !== columnCount) {
        columnCount = count;
        buildStreams(count);
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.font = `400 ${FONT_SIZE}px "JetBrains Mono", monospace`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      for (let column = 0; column < streams.length; column += 1) {
        const stream = streams[column];
        const x = column * columnWidth + columnWidth / 2;
        const headRow = Math.floor(stream.head);
        const length = stream.text.length;

        for (let index = 0; index < length; index += 1) {
          const row = headRow - index;
          if (row < 0 || row > rows) continue;

          const char = stream.text[length - 1 - index];
          const falloff = Math.pow(1 - index / length, 1.35);
          const alpha = maxAlpha * stream.dim * falloff;
          if (alpha <= 0.004) continue;

          context.fillStyle = `rgba(${rain.r}, ${rain.g}, ${rain.b}, ${alpha})`;
          context.fillText(char, x, row * ROW_HEIGHT);
        }
      }
    };

    const update = (delta: number) => {
      for (const stream of streams) {
        stream.head += stream.speed * delta;
        if (stream.head - stream.text.length > rows) {
          stream.head = -Math.random() * 8;
          stream.speed = 3 + Math.random() * 3.5;
          stream.text = pickSnippet();
          stream.dim = 0.45 + Math.random() * 0.55;
        }
      }
    };

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);
      if (time - lastFrame < FRAME_MS) return;
      const delta = Math.min((time - lastFrame) / 1000, 0.1);
      lastFrame = time;
      update(delta);
      draw();
    };

    const start = () => {
      if (raf !== 0 || disposed) return;
      lastFrame = 0;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (raf === 0) return;
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const refreshPalette = () => {
      rain = readRainColor();
      maxAlpha = document.documentElement.getAttribute('data-theme') === 'light' ? ALPHA_LIGHT : ALPHA_DARK;
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else if (!reduced) {
        start();
      }
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (reduced) draw();
      }, 150);
    };

    const themeObserver = new MutationObserver(() => {
      refreshPalette();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('resize', onResize);

    resize();
    refreshPalette();

    if (reduced) {
      draw();
    } else {
      start();
    }

    // Canvas does not wait for webfonts; repaint once JetBrains Mono is ready.
    void document.fonts.ready.then(() => {
      if (!disposed) draw();
    });

    return () => {
      disposed = true;
      stop();
      window.clearTimeout(resizeTimer);
      themeObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('resize', onResize);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
