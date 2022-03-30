import { gql } from "@apollo/client";

export const GET_CITIES = gql`
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
