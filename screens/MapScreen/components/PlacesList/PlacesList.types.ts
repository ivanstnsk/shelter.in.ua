import { CityResult, PlacesResult } from '../../../../graphql/generated/types';

export interface ApolloPlacesResult {
  places: PlacesResult;
  city: CityResult;
}