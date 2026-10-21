import { useTranslation } from 'react-i18next';
import { projectsMeta } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/TechBadge';
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
                <article className={styles.card}>
                  <a
                    href={meta.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.media}
                    aria-label={`${item.title} — ${t('projects.liveLabel')}`}
                  >
                    <img
                      src={meta.screenshot}
                      alt={`${item.title} screenshot`}
                      width={720}
                      height={450}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className={styles.image}
                    />
                  </a>

                  <div className={styles.body}>
                    <div className={styles.header}>
                      <div>
                        <h3 className={styles.title}>
                          <a href={meta.liveUrl} target="_blank" rel="noreferrer">
                            {item.title}
                          </a>
                        </h3>
                        <span className={styles.year}>{meta.year}</span>
                      </div>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                    <ul className={styles.tags}>
                      {meta.tags.map((tag) => (
                        <li key={tag}>
                          <TechBadge label={tag} size="sm" />
                        </li>
                      ))}
                    </ul>
                    <div className={styles.links}>
                      <a href={meta.liveUrl} target="_blank" rel="noreferrer">
                        {t('projects.liveLabel')}
                      </a>
                      <a href={meta.repoUrl} target="_blank" rel="noreferrer">
                        {t('projects.repoLabel')}
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
