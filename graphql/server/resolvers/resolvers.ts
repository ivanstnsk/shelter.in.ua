import { cities } from './cities';
import { places } from './places';

export const resolvers: any = {
  Query: {
    ...cities.Query,
    ...places.Query,
  }
};
