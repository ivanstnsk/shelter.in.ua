import React from 'react';

import { useQuery } from "@apollo/client";

import { GET_CITIES } from '../../../../graphql/client/queries';

import { ApolloCitiesResult } from './CitiesList.types';
import { CitiesListView } from './CitiesList.view';

export const CitiesListContainer: React.FC = () => {
  const { data, loading, error } = useQuery<ApolloCitiesResult>(GET_CITIES);

  return (
    <CitiesListView data={data} loading={loading} error={error} />  
  );
};
