import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Faq.module.scss';

interface FaqRow {
  q: string;
  a: string;
}

export function Faq() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const rows = t('faq.rows', { returnObjects: true }) as unknown as FaqRow[];

  return (
    <section ref={ref} className={styles.faq}>
      <div className={styles.inner}>
        <h2 className={styles.heading} data-animate>{t('faq.heading')}</h2>
        <dl className={styles.list}>
          {rows.map((row) => (
            <div key={row.q} className={styles.row} data-animate>
              <dt className={styles.question}>{row.q}</dt>
              <dd className={styles.answer}>{row.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
