import React from 'react';

import { useQuery } from "@apollo/client";

import { GET_PLACES } from '../../../../graphql/client/queries';

import { ApolloPlacesResult } from './PlacesList.types';
import { PlacesListView } from './PlacesList.view';

interface Props {
  cityCode?: string;
}

export const PlacesListContainer: React.FC<Props> = ({
  cityCode,
}) => {
  const { data, loading, error } = useQuery<ApolloPlacesResult>(GET_PLACES, {
    variables: {
      cityCode,
    }
  });

  return (
    <PlacesListView
      data={data}
      loading={loading}
      error={error}
    />  
  );
};
