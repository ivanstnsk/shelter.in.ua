import React from 'react';

import { Typography } from '../Typography';
import type { TypographyVariant } from '../Typography/Typography';
import styles from './Button.module.scss';

interface Props {
  onClick: () => void;
  children: string;
  variant?: TypographyVariant;
}

export const Button: React.FC<Props> = ({ onClick, children, variant = 'body1' }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <Typography variant={variant} component="div" theme="dark">{children}</Typography>
    </button>
  )
}