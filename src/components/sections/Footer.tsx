import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.wordmark} data-animate>edoutput.dev</p>
        <div className={styles.row} data-animate>
          <div className={styles.places}>
            <a href="mailto:edro998@gmail.com">edro998@gmail.com</a>
            <a href="tel:+5804141280555">+58 04141280555</a>
            <a href="https://www.linkedin.com/in/edorguez" target="_blank" rel="noreferrer">
              linkedin.com/in/edorguez
            </a>
          </div>
          <div className={styles.links}>
            <a href="#about">{t('nav.about')}</a>
            <a href="#experience">{t('nav.experience')}</a>
            <a href="#projects">{t('nav.projects')}</a>
            <a href="#skills">{t('nav.skills')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </div>
        </div>
        <div className={styles.legal} data-animate>
          <span>{t('footer.legal')}</span>
          <button type="button" onClick={scrollToTop} className={styles.backToTop}>
            {t('footer.backToTop')}
          </button>
        </div>
      </div>
    </footer>
  );
}
