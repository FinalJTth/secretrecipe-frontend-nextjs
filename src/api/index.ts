import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosStatic,
  AxiosInstance,
} from "axios";

class API {
  backend: AxiosInstance;

  gatewayURL: string = "http://host.docker.internal:8080/";

  header: Record<string, Record<string, string>> = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  constructor() {
    this.backend = axios.create({
      baseURL: this.gatewayURL,
    });
    this.backend.interceptors.request.use(
      async req => {
        console.log("REQUEST :", req);
        return req;
      },
      (err: Record<string, any>) => {
        throw err;
      },
    );

    this.backend.interceptors.response.use(
      (res: AxiosResponse<any>) => {
        console.log("RESPONSE :", res);
        return res;
      },
      (err: AxiosResponse<any>) => {
        throw err;
      },
    );
  }

  async get(url: string): Promise<Record<string, any>> {
    return await this.backend
      .get(url, this.header)
      .then((response: AxiosResponse<Record<string, any>, any>) => {
        return response.data;
      });
  }

  async post(
    url: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    return await this.backend
      .post(url, JSON.stringify(data), this.header)
      .then((response: AxiosResponse<Record<string, any>, any>) => {
        return response.data;
      });
  }

  async put(
    url: string,
    data: Record<string, any>,
  ): Promise<Record<string, any>> {
    return await this.backend
      .put(url, JSON.stringify(data), this.header)
      .then((response: AxiosResponse<Record<string, any>, any>) => {
        return response.data;
      });
  }

  async delete(url: string): Promise<Record<string, any>> {
    return await this.backend
      .delete(url, this.header)
      .then((response: AxiosResponse<Record<string, any>, any>) => {
        return response.data;
      });
  }
}

const api = new API();

export default api;
