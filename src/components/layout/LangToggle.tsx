import { useTranslation } from 'react-i18next';
import styles from './LangToggle.module.scss';

export function LangToggle() {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language.startsWith('es');

  const toggle = () => {
    const next = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(next);
  };

  return (
    <button type="button" onClick={toggle} className={styles.toggle} aria-label={t('language.change')}>
      {isSpanish ? 'EN' : 'ES'}
    </button>
  );
}
