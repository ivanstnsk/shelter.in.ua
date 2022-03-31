import React from 'react';
import { ApolloError } from '@apollo/client';
import Link from 'next/link';

import { ListItem, ListItemSkeleton } from '../../../../components/ListItem';

import styles from './PlacesList.module.scss';
import { ApolloPlacesResult } from './PlacesList.types';
import { Typography } from '../../../../components/Typography';

interface Props {
  data: ApolloPlacesResult | undefined;
  error: ApolloError | undefined;
  loading: boolean;
  cityCode?: string;
}

export const PlacesListView: React.FC<Props> = ({
  data,
  loading,
  cityCode,
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
      <>
      <Link href="/map">
        <a><Typography variant="body3" component="div">Повернутись назад</Typography></a>
      </Link>
      {data?.city.__typename === 'City' && (
        <div className={styles.headContainer}>
          <Typography variant="h1" component="h1">{data?.city?.level4.names.uk}</Typography>
        </div>
      )}
      <div className={styles.container}>
        {data.places.items.map((place) => {
          const { code, names } = place;
  
          return (
            <ListItem key={code} href={`/map/${cityCode}/${code}`}>{names.uk}</ListItem>
          );
        })}
      </div>
      </>
    );
  }
  return null;
};
