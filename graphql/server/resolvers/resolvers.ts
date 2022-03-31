import { cities } from './cities';
import { city } from './city';
import { places } from './places';

export const resolvers: any = {
  Query: {
    ...cities.Query,
    ...city.Query,
    ...places.Query,
  }
};
