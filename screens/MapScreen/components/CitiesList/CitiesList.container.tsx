import React from 'react';

import { useQuery, gql } from "@apollo/client";

import { ApolloCitiesResult } from './CitiesList.types';
import { CitiesListView } from './CitiesList.view';

const QUERY = gql`
query {
  cities {
    ... on CitiesPayload {
     totalCount
      items {
        code
        level1 {
          names {
            uk
          }
        }
        level4 {
          names {
            uk
          }
        }
      } 
    }
    ... on GenericError {
      errors {
        message
      }
    }
  }
}
`;

export const CitiesListContainer: React.FC = () => {
  const { data, loading, error } = useQuery<ApolloCitiesResult>(QUERY);

  return (
    <CitiesListView data={data} loading={loading} error={error} />  
  );
};
