import { CityResult } from '../../generated/types';
import { isTokenValid } from '../validate';

export const city = {
  Query: {
    async city(parent: any, args: any, context: any): Promise<CityResult> {
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

      const data = await dataAPI.getCity(input.cityCode);

      return {
        __typename: 'City',
        ...data,
      };
    },
  }
};
