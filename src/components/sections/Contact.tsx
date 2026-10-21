import { useCallback, useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalWindow } from '../ui/TerminalWindow';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import styles from './Contact.module.scss';

interface ContactProps {
  onThemeCommand?: (theme: 'dark' | 'light') => void;
}

type ResumeLang = 'en' | 'es';

const COMMANDS = [
  'help',
  'cv',
  'email',
  'linkedin',
  'github',
  'whoami',
  'ls',
  'lang en',
  'lang es',
  'theme dark',
  'theme light',
  'clear',
];

function distance(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);

  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(current[j - 1] + 1, previous[j] + 1, previous[j - 1] + cost);
    }
    previous = current;
  }

  return previous[b.length];
}

function suggestCommand(input: string): string | null {
  let best: { command: string; score: number } | null = null;

  for (const command of COMMANDS) {
    const score = distance(input, command);
    if (!best || score < best.score) best = { command, score };
  }

  if (best && best.score <= Math.max(2, Math.floor(input.length / 2))) return best.command;
  return null;
}

export function Contact({ onThemeCommand }: ContactProps) {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const history = historyRef.current;
    if (history) history.scrollTop = history.scrollHeight;
  }, [lines]);

  const resumeLang: ResumeLang = i18n.language.startsWith('es') ? 'es' : 'en';

  const downloadResume = useCallback(
    (lang: ResumeLang) => {
      const link = document.createElement('a');
      link.href = lang === 'es' ? profile.resume.es : profile.resume.en;
      link.download = lang === 'es' ? 'Eduardo_Rodriguez_CV_ES.pdf' : 'Eduardo_Rodriguez_CV_EN.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      setLines((previous) => [
        ...previous,
        `${t('contact.terminal.prompt')} ${t('contact.terminal.download', { file: link.download })}`,
      ]);
    },
    [t]
  );

  const runCommand = useCallback(
    (raw: string) => {
      const command = raw.trim().toLowerCase().replace(/\s+/g, ' ');
      if (!command) return;

      setLines((previous) => [...previous, `${t('contact.terminal.prompt')} ${raw.trim()}`]);

      const add = (line: string) => setLines((previous) => [...previous, line]);

      if (command === 'help' || command === 'h' || command === '?') {
        add(t('contact.terminal.help'));
      } else if (
        command === 'cv' ||
        command === 'resume' ||
        command === 'download' ||
        command === 'download cv' ||
        command === 'download resume' ||
        command === 'download --resume'
      ) {
        downloadResume(resumeLang);
      } else if (command === 'email' || command === 'mail' || command === 'contact --email') {
        add(t('contact.terminal.email', { email: profile.email }));
        window.location.href = `mailto:${profile.email}`;
      } else if (command === 'linkedin' || command === 'contact --linkedin') {
        add(t('contact.terminal.linkedin', { url: profile.linkedin }));
        window.open(profile.linkedin, '_blank', 'noopener,noreferrer');
      } else if (command === 'github' || command === 'contact --github') {
        add(t('contact.terminal.github', { url: profile.github }));
        window.open(profile.github, '_blank', 'noopener,noreferrer');
      } else if (command === 'contact') {
        add(`email ${profile.email} · linkedin ${profile.linkedin} · github ${profile.github}`);
      } else if (command === 'whoami' || command === 'me') {
        add(t('contact.terminal.whoami'));
      } else if (command === 'ls') {
        add(`${t('nav.about')}  ${t('nav.experience')}  ${t('nav.projects')}  ${t('nav.skills')}  ${t('nav.contact')}`);
      } else if (command === 'lang' || command === 'lang es') {
        i18n.changeLanguage('es');
        add(t('contact.terminal.langEs'));
      } else if (command === 'lang en') {
        i18n.changeLanguage('en');
        add(t('contact.terminal.langEn'));
      } else if (command === 'theme' || command === 'dark' || command === 'theme dark') {
        onThemeCommand?.('dark');
        add(t('contact.terminal.themeDark'));
      } else if (command === 'light' || command === 'theme light') {
        onThemeCommand?.('light');
        add(t('contact.terminal.themeLight'));
      } else if (command === 'clear' || command === 'cls') {
        setLines([]);
      } else {
        add(t('contact.terminal.unknown', { cmd: command }));
        const suggestion = suggestCommand(command);
        if (suggestion) add(t('contact.terminal.suggestion', { cmd: suggestion }));
      }

      setInput('');
      inputRef.current?.focus();
    },
    [downloadResume, i18n, onThemeCommand, resumeLang, t]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
  };

  const contactRows = [
    { key: 'email', value: profile.email, href: `mailto:${profile.email}` },
    { key: 'phone', value: profile.phone, href: profile.phoneLink },
    { key: 'linkedin', value: profile.linkedin.replace('https://', ''), href: profile.linkedin },
    { key: 'github', value: profile.github.replace('https://', ''), href: profile.github },
    { key: 'location', value: profile.location, href: null },
  ];

  const chips = ['help', 'cv', 'email', 'github', 'theme'];

  return (
    <section ref={ref} className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.heading} data-animate>{t('contact.heading')}</h2>

        <div className={styles.rows}>
          {contactRows.map((row) =>
            row.href ? (
              <a key={row.key} href={row.href} className={styles.row} data-animate>
                <span className={styles.rowValue}>{row.value}</span>
              </a>
            ) : (
              <div key={row.key} className={styles.row} data-animate>
                <span className={styles.rowValue}>{row.value}</span>
              </div>
            )
          )}
        </div>

        <div className={styles.cv} data-animate>
          <div>
            <p className={styles.cvTitle}>{t('contact.cvTitle')}</p>
            <p className={styles.cvNote}>{t('contact.cvNote')}</p>
          </div>
          <div className={styles.cvButtons}>
            <a
              href={profile.resume.en}
              download="Eduardo_Rodriguez_CV_EN.pdf"
              className={styles.cvButton}
            >
              {t('contact.downloadEn')}
            </a>
            <a
              href={profile.resume.es}
              download="Eduardo_Rodriguez_CV_ES.pdf"
              className={styles.cvButton}
            >
              {t('contact.downloadEs')}
            </a>
          </div>
        </div>

        <div className={styles.terminalShell} data-animate onClick={() => inputRef.current?.focus()}>
          <TerminalWindow className={styles.terminal}>
            <pre ref={historyRef} className={styles.history} aria-live="polite">
              {lines.map((line, index) => (
                <div key={index} className={styles.historyLine}>
                  {line}
                </div>
              ))}
            </pre>
            <form onSubmit={handleSubmit} className={styles.form}>
              <code className={styles.inputLine}>
                <span className={styles.prompt}>{t('contact.terminal.prompt')}</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder={t('contact.terminal.placeholder')}
                  className={styles.input}
                  autoComplete="off"
                  spellCheck={false}
                  aria-label={t('contact.terminal.placeholder')}
                />
              </code>
            </form>
            <div className={styles.chips}>
              <span className={styles.hint}>{t('contact.terminal.hint')}</span>
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  className={styles.chip}
                  onClick={(event) => {
                    event.stopPropagation();
                    runCommand(chip);
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
