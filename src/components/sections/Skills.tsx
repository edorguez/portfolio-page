import { useTranslation } from 'react-i18next';
import { skillGroups } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TechIcon } from '../ui/TechIcon';
import styles from './Skills.module.scss';

export function Skills() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className={styles.skills} id="skills">
      <div className={styles.inner}>
        <div data-animate>
          <SectionHeading title={t('skills.heading')} note={t('skills.note')} />
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.id} className={styles.group} data-animate>
              <h3 className={styles.groupTitle}>
                {group.id === 'professional' ? t('skills.professional') : t('skills.builder')}
              </h3>
              <ul className={styles.list}>
                {group.items.map((skill) => (
                  <li key={skill.label} className={styles.item}>
                    {skill.icon ? (
                      <span className={styles.icon}>
                        <TechIcon name={skill.icon} />
                      </span>
                    ) : (
                      <span className={styles.monogram}>{skill.monogram}</span>
                    )}
                    <span className={styles.label}>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
