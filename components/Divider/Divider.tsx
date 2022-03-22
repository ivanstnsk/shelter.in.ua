import React from 'react';
import styles from './Divider.module.scss';

export const Divider: React.FC = () => {
  return (
    <hr className={styles.divider} />
  )
}