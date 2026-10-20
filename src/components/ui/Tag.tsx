import styles from './Tag.module.scss';

interface TagProps {
  children: string;
}

export function Tag({ children }: TagProps) {
  return <span className={styles.tag}>{children}</span>;
}
