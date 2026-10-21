import { resolveTech, techIcons } from '../../data/techIcons';
import styles from './TechBadge.module.scss';

interface TechBadgeProps {
  label: string;
  icon?: string;
  monogram?: string;
  size?: 'sm' | 'md';
}

export function TechBadge({ label, icon, monogram, size = 'sm' }: TechBadgeProps) {
  const ref = icon || monogram ? { icon, monogram } : resolveTech(label);
  const svg = ref.icon ? techIcons[ref.icon] : undefined;

  return (
    <span className={`${styles.badge} ${size === 'md' ? styles.badgeMd : styles.badgeSm}`}>
      {svg ? (
        <span className={styles.icon} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <span className={styles.monogram} aria-hidden="true">
          {ref.monogram ?? label.slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className={styles.label}>{label}</span>
    </span>
  );
}
