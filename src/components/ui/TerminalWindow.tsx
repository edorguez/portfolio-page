import type { ReactNode } from 'react';
import styles from './TerminalWindow.module.scss';

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  'data-ui'?: boolean;
}

export function TerminalWindow({ children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`${styles.window} ${className}`} data-ui>
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
