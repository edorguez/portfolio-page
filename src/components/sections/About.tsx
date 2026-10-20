import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.scss';

interface FactEntry {
  label: string;
  value: string;
}

interface RecordEntry {
  name: string;
  year: string;
}

export function About() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const facts = t('about.facts', { returnObjects: true }) as Record<string, FactEntry>;
  const companies = t('about.records.companies.items', { returnObjects: true }) as unknown as RecordEntry[];
  const domains = t('about.records.domains.items', { returnObjects: true }) as unknown as RecordEntry[];

  return (
    <section ref={ref} className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.row}>
          <dl className={styles.facts} data-animate>
            {Object.entries(facts).map(([key, fact]) => (
              <div key={key} className={styles.fact}>
                <dt className={styles.label}>{fact.label}</dt>
                <dd className={styles.value}>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.paragraph} data-animate>{t('about.paragraph')}</p>
        </div>

        <div className={styles.row}>
          <div className={styles.record} data-animate>
            <h3 className={styles.recordLabel}>{t('about.records.companies.label')}</h3>
            <ul className={styles.recordList}>
              {companies.map((item) => (
                <li key={item.name} className={styles.recordItem}>
                  <span>{item.name}</span>
                  <span className={styles.year}>{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.record} data-animate>
            <h3 className={styles.recordLabel}>{t('about.records.domains.label')}</h3>
            <ul className={styles.recordList}>
              {domains.map((item) => (
                <li key={item.name} className={styles.recordItem}>
                  <span>{item.name}</span>
                  <span className={styles.year}>{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
