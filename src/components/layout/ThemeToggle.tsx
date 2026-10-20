import { useTranslation } from 'react-i18next';
import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const { t } = useTranslation();
  const label = theme === 'dark' ? t('theme.light') : t('theme.dark');

  return (
    <button
      type="button"
      onClick={onToggle}
      className={styles.toggle}
      aria-label={label}
      title={label}
    >
      {label}
    </button>
  );
}
