import { gql } from 'apollo-server-core';

export const typeDefs = gql`
# input CititesFilter {
#   level_1: Int
#   level_2: Int
#   level_3: Int
#   level_4: Int
# }

# input SearchCitiesFilter {
#   cityName: String
# }

# input CitiesInput {
#   filter: CititesFilter!
# }

type CitiesPayload {
  totalCount: Int!
  items: [City!]!
}

# input SearchCitiesInput {
#   filter: SearchCitiesFilter!
# }

# type SearchCitiesPayload {
#   totalCount: Int!
#   items: [SearchCityResult!]!
# }

# type SearchCityResult {
#   cityName: String!
#   region: String!
#   community: String!
# }

type LocaleString {
  uk: String!
  ru: String!
  en: String!
}

type City {
  code: String!
  names: LocaleString!
}

type ErrorMessage {
  message: String!
}

type GenericError {
  errors: [ErrorMessage]!
}

union CitiesResult = CitiesPayload | GenericError

type Query {
  cities: CitiesResult!
  # cities(input: CitiesInput): CitiesResult!
  # searchCities(input: SearchCitiesInput): SearchCitiesPayload!
}
`;
