import Axios, { AxiosStatic, AxiosResponse } from 'axios';

class Httper {
  private static instance: Httper;

  private static http: AxiosStatic;

  private constructor() {
    if (!Httper.http) {
      Httper.http = Axios;
    }
  }

  static getInstance(): Httper {
    if (!Httper.instance) {
      Httper.instance = new Httper();
    }
    return Httper.instance;
  }

  async get(url: string): Promise<string> {
    try {
      const resp: AxiosResponse = await Httper.http.get(url);
      return resp.data;
    } catch (err) {
      // console.log(err);
      return 'request error';
    }
  }
}

export default Httper.getInstance();
