import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LangToggle } from './LangToggle';
import styles from './Nav.module.scss';

interface NavProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

export function Nav({ theme, onThemeToggle }: NavProps) {
  const { t } = useTranslation();

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
      <div className={styles.group}>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <LangToggle />
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    </nav>
  );
}
