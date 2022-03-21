import { DataSource } from "apollo-datasource";

// import { validateCountryData } from "../helpers/countries.helpers";

export class FileDataSource extends DataSource {
  constructor() {
    super();
  }

  async getAllCities(): Promise<any> {
    return new Promise(async (resolve) => {
      const data = (await import('./cities.json')).default as any;
      try {
        resolve(data);
      } catch (err) {
        console.log(err);
        resolve([]);
      }
    });
  }
}