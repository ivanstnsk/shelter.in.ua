import React, { memo } from 'react';
import ContentLoader from 'react-content-loader';

import styles from './ListItem.module.scss';

export const ListItemSkeleton: React.FC = memo(() => {
  const width = Math.random() * 100 + 60;

  return (
    <ContentLoader viewBox="0 0 400 50" className={styles.skeleton}>  
      <rect width={width} height="20" />
    </ContentLoader>
  );
});

ListItemSkeleton.displayName = 'ListItemSkeleton';
