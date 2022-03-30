import { DataSource } from "apollo-datasource";

export class FileDataSource extends DataSource {
  constructor() {
    super();
  }

  async getAllCities(): Promise<any> {
    return new Promise(async (resolve) => {
      try {
        const data = (await import('./cities.json')).default as any;
        resolve(data);
      } catch (err) {
        console.log(err);
        resolve([]);
      }
    });
  }

  async getAllPlaces(cityCode: string): Promise<any> {
    return new Promise(async (resolve) => {
      try {
        const data = (await import(`./places/${cityCode}.json`)).default as any;
        resolve(data);
      } catch (err) {
        console.log(err);
        resolve([]);
      }
    });
  }
}