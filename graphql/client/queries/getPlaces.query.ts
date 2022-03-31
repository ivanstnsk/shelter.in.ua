import { gql } from "@apollo/client";

export const GET_PLACES = gql`
query GetPlaces($cityCode: String!) {
  places(input: {
    cityCode: $cityCode
  }) {
    ... on PlacesPayload {
      totalCount
      items {
        code
        names {
          uk
          en
        }
      } 
    }
    ... on GenericError {
      errors {
        message
      }
    }
  }
  city(input: {
    cityCode: $cityCode
  }) {
    ... on City {
      code,
      level4 {
        names {
          uk
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