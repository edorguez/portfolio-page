import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalWindow } from '../ui/TerminalWindow';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { profile } from '../../data/profile';
import styles from './Contact.module.scss';

interface ContactProps {
  onThemeCommand?: (theme: 'dark' | 'light') => void;
}

export function Contact({ onThemeCommand }: ContactProps) {
  const { t, i18n } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const respond = useCallback(
    (text: string) => {
      setLines((prev) => [...prev, `${t('contact.terminal.prompt')} ${text}`]);
    },
    [t]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    setLines((prev) => [...prev, `${t('contact.terminal.prompt')} ${input}`]);
    setInput('');

    switch (cmd) {
      case 'help':
        respond(t('contact.terminal.help'));
        break;
      case 'contact --email':
        window.location.href = `mailto:${profile.email}`;
        respond(`opening mailto:${profile.email}`);
        break;
      case 'contact --linkedin':
        window.open(profile.linkedin, '_blank', 'noopener,noreferrer');
        respond(`opening ${profile.linkedin}`);
        break;
      case 'contact --github':
        window.open(profile.github, '_blank', 'noopener,noreferrer');
        respond(`opening ${profile.github}`);
        break;
      case 'download --resume':
        {
          const a = document.createElement('a');
          a.href = '/resume.pdf';
          a.download = 'Eduardo_Rodriguez_CV.pdf';
          a.click();
          respond('downloading resume.pdf');
        }
        break;
      case 'lang en':
        i18n.changeLanguage('en');
        respond('language set to english');
        break;
      case 'lang es':
        i18n.changeLanguage('es');
        respond('language set to spanish');
        break;
      case 'theme dark':
        onThemeCommand?.('dark');
        respond('theme set to dark');
        break;
      case 'theme light':
        onThemeCommand?.('light');
        respond('theme set to light');
        break;
      case 'clear':
        setLines([]);
        break;
      default:
        respond(t('contact.terminal.unknown', { cmd }));
    }
  };

  const contactRows = [
    { key: 'email', value: profile.email, href: `mailto:${profile.email}` },
    { key: 'phone', value: profile.phone, href: profile.phoneLink },
    { key: 'linkedin', value: profile.linkedin.replace('https://', ''), href: profile.linkedin },
    { key: 'github', value: profile.github.replace('https://', ''), href: profile.github },
    { key: 'location', value: profile.location, href: '#' },
  ];

  return (
    <section ref={ref} className={styles.contact} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.heading} data-animate>{t('contact.heading')}</h2>

        <div className={styles.rows}>
          {contactRows.map((row) => (
            <a
              key={row.key}
              href={row.href}
              className={styles.row}
              data-animate
            >
              <span className={styles.rowValue}>{row.value}</span>
            </a>
          ))}
        </div>

        <div data-animate>
          <TerminalWindow className={styles.terminal}>
            <pre className={styles.history} aria-live="polite">
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
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('contact.terminal.placeholder')}
                  className={styles.input}
                  autoComplete="off"
                  aria-label={t('contact.terminal.placeholder')}
                />
              </code>
            </form>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
