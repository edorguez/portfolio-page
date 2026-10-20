import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { TerminalWindow } from '../ui/TerminalWindow';
import { TerminalCursor } from '../layout/TerminalCursor';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { profile } from '../../data/profile';
import styles from './Hero.module.scss';

export function Hero() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const scopeRef = useRef<HTMLElement>(null);
  const commandRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (reduced) return;
      const command = commandRef.current;
      const lines = gsap.utils.toArray<HTMLElement>(`.${styles.line}`);
      const support = scopeRef.current?.querySelector(`.${styles.supporting}`);
      const cta = scopeRef.current?.querySelector(`.${styles.cta}`);
      const target = t('hero.command');

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Type the command
      const proxy = { i: 0 };
      tl.to(proxy, {
        i: target.length,
        duration: target.length * 0.08,
        ease: 'steps(1)',
        onUpdate: () => {
          if (command) command.textContent = target.slice(0, Math.round(proxy.i));
        },
      });
      tl.to({}, { duration: 0.25 });
      tl.call(() => {
        if (command) command.textContent = '';
      });

      // Reveal statement lines with a spring-like stagger (keep visible)
      tl.fromTo(
        lines,
        { y: 40, rotateX: -4 },
        {
          y: 0,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'back.out(1.2)',
        },
        '+=0.1'
      );

      // Reveal supporting sentence and CTA
      if (support) tl.fromTo(support, { y: 20 }, { y: 0, duration: 0.6 }, '-=0.4');
      if (cta) tl.fromTo(cta, { y: 20 }, { y: 0, duration: 0.6 }, '-=0.5');
    },
    { scope: scopeRef }
  );

  const statementLines = t('hero.statement').split('\n');

  return (
    <section ref={scopeRef} className={styles.hero} id="#" aria-label="Introduction">
      <div className={styles.inner}>
        <TerminalWindow className={styles.terminal}>
          <pre className={styles.session}>
            <span className={styles.prompt}>{t('hero.prompt')}</span>{' '}
            <span ref={commandRef} className={styles.command} />
            <TerminalCursor />
          </pre>
        </TerminalWindow>

        <h1 className={styles.statement}>
          {statementLines.map((line, index) => (
            <span key={index} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>

        <div className={styles.footer}>
          <p className={styles.supporting}>
            {t('hero.supporting')}
          </p>
          <button
            type="button"
            className={styles.cta}
            onClick={() => { window.location.href = `mailto:${profile.email}`; }}
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
