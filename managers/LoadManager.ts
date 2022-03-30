export class LoadManager {
  /*
  * TODO: create a static path's for router
  */
  public static loadCities = async () => {
    const cities = (await import('../graphql/server/datasources/cities.json')).default as any;

    return cities;
  }

  /*
  * TODO: create a static path's for router
  */
  public static loadPlaces = async (cityCode: string) => {
    const places = (await import(`../graphql/server/datasources/places/${cityCode}.json`)).default as any;

    return places;
  }
}