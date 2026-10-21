import { techIcons } from '../../data/techIcons';
import styles from './TechIcon.module.scss';

interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  const svg = techIcons[name];
  if (!svg) return null;

  return (
    <span
      className={styles.icon}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
