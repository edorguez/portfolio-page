import type { ReactNode } from 'react';
import styles from './TerminalWindow.module.scss';

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
  flush?: boolean;
  className?: string;
  'data-ui'?: boolean;
}

export function TerminalWindow({ children, title, flush = false, className = '' }: TerminalWindowProps) {
  return (
    <div className={`${styles.window} ${className}`} data-ui>
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        {title && <code className={styles.title}>{title}</code>}
      </div>
      <div className={flush ? `${styles.body} ${styles.flush}` : styles.body}>{children}</div>
    </div>
  );
}
