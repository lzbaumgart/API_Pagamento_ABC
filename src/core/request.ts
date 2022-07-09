import Axios, { AxiosInstance, AxiosRequestHeaders } from 'axios';
export class Request {
  url: string;
  method: string;
  headers: AxiosRequestHeaders;
  response: any;
  private axios: AxiosInstance;
  constructor(url: string, method: string, headers: AxiosRequestHeaders) {
    this.axios = Axios.create({
      baseURL: url,
      timeout: 30000,
      method,
      headers,
    });
  }

  public async send(body: any) {
    return this.axios
      .request({
        data: body,
      })
      .catch((erro) => {
        console.log(erro);
      });
  }
}
