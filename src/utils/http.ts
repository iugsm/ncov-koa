import Axios, { AxiosStatic, AxiosResponse } from 'axios';

class Httper {
  private static instance: Httper;

  private static http: AxiosStatic = Axios;

  private constructor() {}

  static getInstance(): Httper {
    if (!Httper.instance) {
      Httper.instance = new Httper();
    }
    return Httper.instance;
  }

  static async get(url: string): Promise<string> {
    try {
      const resp: AxiosResponse = await this.http.get(url);
      return resp.data;
    } catch (err) {
      console.log(err);
      return 'request error';
    }
  }
}

export default Httper;
