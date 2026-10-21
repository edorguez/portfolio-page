import { useTranslation } from 'react-i18next';
import { profile } from '../../data/profile';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import styles from './Nav.module.scss';

interface NavProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function Nav({ theme, onThemeToggle }: NavProps) {
  const { t, i18n } = useTranslation();
  const resumeHref = i18n.language.startsWith('es') ? profile.resume.es : profile.resume.en;

  const links = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={styles.nav} aria-label="Main">
      <a href="#" className={styles.wordmark}>
        edoutput.dev
      </a>

      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
        <li>
          <a href={resumeHref} download>
            {t('nav.cv')}
          </a>
        </li>
      </ul>

      <div className={styles.controls}>
        <LangToggle />
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
}
