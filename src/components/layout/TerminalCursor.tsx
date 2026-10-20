import styles from './TerminalCursor.module.scss';

export function TerminalCursor() {
  return <span className={styles.cursor} aria-hidden="true" />;
}
