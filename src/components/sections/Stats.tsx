import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Stats.module.scss';

interface ReceiptRow {
  desc: string;
  value: string;
}

export function Stats() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const rows = t('stats.receipt.rows', { returnObjects: true }) as unknown as ReceiptRow[];

  return (
    <section ref={ref} className={styles.stats}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading} data-animate>{t('stats.heading')}</h2>
          <p className={styles.note} data-animate>{t('stats.note')}</p>
          <div className={styles.totalBlock} data-animate>
            <span className={styles.total}>{t('stats.total')}</span>
            <span className={styles.totalLabel}>{t('stats.totalLabel')}</span>
          </div>
        </div>

        <div className={styles.receipt} data-animate>
          <div className={styles.receiptGroup}>
            <h3 className={styles.groupTitle}>{t('stats.receipt.group1')}</h3>
            {rows.slice(0, 2).map((row) => (
              <div key={row.desc} className={styles.row}>
                <span>{row.desc}</span>
                <span className={styles.dots} />
                <span className={styles.value}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.receiptGroup}>
            <h3 className={styles.groupTitle}>{t('stats.receipt.group2')}</h3>
            {rows.slice(2, 4).map((row) => (
              <div key={row.desc} className={styles.row}>
                <span>{row.desc}</span>
                <span className={styles.dots} />
                <span className={styles.value}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.receiptGroup}>
            <h3 className={styles.groupTitle}>{t('stats.receipt.group3')}</h3>
            {rows.slice(4).map((row) => (
              <div key={row.desc} className={styles.row}>
                <span>{row.desc}</span>
                <span className={styles.dots} />
                <span className={styles.value}>{row.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.totalRow}>
            <span>{t('stats.receipt.totalRow')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
