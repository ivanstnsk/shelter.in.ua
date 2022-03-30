import React from 'react';
import { ApolloError } from '@apollo/client';

import { ListItem, ListItemSkeleton } from '../../../../components/ListItem';

import styles from './PlacesList.module.scss';
import { ApolloPlacesResult } from './PlacesList.types';

interface Props {
  data: ApolloPlacesResult | undefined;
  error: ApolloError | undefined;
  loading: boolean;
}

export const PlacesListView: React.FC<Props> = ({
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

  if (data?.places?.__typename === 'PlacesPayload') {
    return (
      <div className={styles.container}>
        {data.places.items.map((place) => {
          const { code, names } = place;
  
          return (
            <ListItem key={code} href={`/map/${code}`}>{names.uk}</ListItem>
          );
        })}
      </div>
    );
  }
  return null;
};
