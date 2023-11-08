import axios, {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosStatic,
  AxiosInstance,
} from "axios";

const API = class API {
  backend: AxiosInstance;

  gatewayURL: string = "http://localhost:8080/";

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

  async get(url: string) {
    const response = await this.backend.get(url, this.header);
    return response.data;
  }

  post(url: string, data: Record<string, any>) {
    this.backend
      .post(url, JSON.stringify(data), this.header)
      .then((response: Record<string, any>) => {
        return response.data;
      });
  }

  put(url: string, data: Record<string, any>) {
    this.backend
      .put(url, JSON.stringify(data), this.header)
      .then((response: Record<string, any>) => {
        return response.data;
      });
  }

  delete(url: string) {
    this.backend
      .delete(url, this.header)
      .then((response: Record<string, any>) => {
        return response.data;
      });
  }
};

export default API;
