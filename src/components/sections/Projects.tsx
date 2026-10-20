import { useTranslation } from 'react-i18next';
import { projectsMeta } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Tag } from '../ui/Tag';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Projects.module.scss';

interface ProjectItem {
  title: string;
  year: string;
  description: string;
}

export function Projects() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();
  const items = t('projects.items', { returnObjects: true }) as unknown as ProjectItem[];

  return (
    <section ref={ref} className={styles.projects} id="projects">
      <div className={styles.inner}>
        <div data-animate>
          <SectionHeading title={t('projects.heading')} note={t('projects.note')} />
        </div>

        <ul className={styles.list}>
          {items.map((item, index) => {
            const meta = projectsMeta[index];
            if (!meta) return null;

            return (
              <li key={meta.id} className={styles.item} data-animate>
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                  aria-label={`${item.title} — ${t('projects.liveLabel')}`}
                >
                  <div className={styles.header}>
                    <div>
                      <h3 className={styles.title}>{item.title}</h3>
                      <span className={styles.year}>{item.year}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.reveal}>
                    <div className={styles.tags}>
                      {meta.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <div className={styles.links}>
                      <span>{t('projects.liveLabel')}</span>
                      <a
                        href={meta.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('projects.repoLabel')}
                      </a>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
