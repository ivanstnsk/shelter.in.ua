import React from 'react';

import { useQuery, gql } from "@apollo/client";

import { ApolloPlacesResult } from './PlacesList.types';
import { PlacesListView } from './PlacesList.view';

// const QUERY = gql`
// query {
//   cities {
//     ... on CitiesPayload {
//      totalCount
//       items {
//         code
//         level1 {
//           names {
//             uk
//           }
//         }
//         level4 {
//           names {
//             uk
//           }
//         }
//       } 
//     }
//     ... on GenericError {
//       errors {
//         message
//       }
//     }
//   }
// }
// `;

interface Props {
  cityCode?: string;
}

export const PlacesListContainer: React.FC<Props> = ({
  cityCode,
}) => {
  // const { data, loading, error } = useQuery<ApolloPlacesResult>(QUERY);
  console.log('cityCode', cityCode)
  return (
    <PlacesListView
      // data={data}
      // loading={loading}
      // error={error}
    />  
  );
};
