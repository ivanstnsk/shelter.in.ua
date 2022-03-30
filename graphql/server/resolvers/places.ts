import { PlacesResult } from '../../generated/types';
import { isTokenValid } from '../validate';

export const places = {
  Query: {
    async places(parent: any, args: any, context: any): Promise<PlacesResult> {
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

      const { input } = args;

      if (!input || !input?.cityCode) {
        console.log('invalid cityCode')
        return {
          __typename: 'GenericError',
          errors: [{
            message: 'Invalid cityCode',
          }]
        }
      }

      const { dataAPI } = context.dataSources;

      const places = await dataAPI.getAllPlaces(input.cityCode);

      return {
        __typename: 'PlacesPayload',
        totalCount: places.length,
        items: places,
      };
    },
  }
};
