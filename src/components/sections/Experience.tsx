import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Experience.module.scss';

interface ExperienceItem {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

export function Experience() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const items = t('experience.items', { returnObjects: true }) as unknown as ExperienceItem[];

  return (
    <section ref={ref} className={styles.experience} id="experience">
      <div className={styles.inner}>
        <div data-animate>
          <SectionHeading title={t('experience.heading')} note={t('experience.note')} />
        </div>

        <ol className={styles.list}>
          {items.map((item) => (
            <li key={item.company} className={styles.item} data-animate>
              <div className={styles.marker} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.company}>{item.company}</h3>
                    <p className={styles.title}>{item.title}</p>
                  </div>
                  <div className={styles.meta}>
                    <span>{item.period}</span>
                    <span className={styles.location}>{item.location}</span>
                  </div>
                </div>
                <ul className={styles.bullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
