import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  title: string;
  note?: string;
}

export function SectionHeading({ title, note }: SectionHeadingProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {note && <p className={styles.note}>{note}</p>}
    </header>
  );
}
