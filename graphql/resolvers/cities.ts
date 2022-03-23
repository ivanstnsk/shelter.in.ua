import { CitiesResult } from '../generated/graphql';
import { isTokenValid } from '../validate';

export const cities = {
  Query: {
    async cities(parent: any, args: any, context: any): Promise<CitiesResult> {
      const { error } = await isTokenValid(context.token) as any;

      if (error) {
        console.log(error)
        return {
          __typename: 'GenericError',
          errors: [{
            message: 'Invalid token',
          }]
        }
      }

      const { dataAPI } = context.dataSources;

      const cities = await dataAPI.getAllCities();

      return {
        __typename: 'CitiesPayload',
        totalCount: cities.length,
        items: cities,
      };
    },
  }
};
