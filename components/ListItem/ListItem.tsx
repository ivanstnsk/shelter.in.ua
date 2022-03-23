import React from 'react';
import Link from 'next/link';

import { Typography } from '../Typography';

import styles from './ListItem.module.scss';

interface Props {
  href: string;
  children: string;
}
export const ListItem: React.FC<Props> = ({
  href,
  children,
}) => {
  return (
    <Link href={href}>
      <a className={styles.link}>
        <Typography variant="body1" component="div" className={styles.label}>{children}</Typography>
        <div className={styles.icon} />
      </a>
    </Link>
  )
}