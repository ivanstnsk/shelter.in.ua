import React from 'react';
import Link from 'next/link';

import styles from './ListItem.module.scss';

interface Props {
  href: string;
  children: React.ReactChild;
}
export const ListItem: React.FC<Props> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a className={styles.link}>
        {children}
        <div className={styles.icon} />
      </a>
    </Link>
  )
}