import React from 'react';
import { ApolloError } from '@apollo/client';

import { ListItem, ListItemSkeleton } from '../../../../components/ListItem';

import styles from './CitiesList.module.scss';
import { ApolloCitiesResult } from './CitiesList.types';

interface Props {
  data: ApolloCitiesResult | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

export const CitiesListView: React.FC<Props> = ({
  data,
  loading,
}) => {
  if (loading) {
    return (
      <div className={styles.container}>
        <ListItemSkeleton />
        <ListItemSkeleton />
      </div>
    );
  }

  if (data?.cities?.__typename === 'CitiesPayload') {
    return (
      <div className={styles.container}>
        {data.cities.items.map((city) => {
          const { code, level1, level4 } = city;
          const str = `${level4.names.uk}, ${level1.names.uk}`;
  
          return (
            <ListItem key={code} href={`/map/${code}`}>{str}</ListItem>
          );
        })}
      </div>
    );
  }
  return null;
};
