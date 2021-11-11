import axios from "axios";
import iStorage from "../utils/iStorage";
import configs from "../configs";
let cookies = {};
export default class ApiUtils {
  private static apiUtils: ApiUtils;

  public static getInstance() {
    if (!this.apiUtils) {
      this.apiUtils = new ApiUtils();
      this.setBaseUrl(configs.API_BASE_URL);
    }
    return this.apiUtils;
  }

  private static setBaseUrl(url: string) {
    console.log("SET BASE URL: " + url);
    axios.defaults.baseURL = url;
  }

  private async setHeader(headers: object | null) {
    const h = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };

    if (headers) {
      Object.assign(h, headers);
    }

    var authInfoStr = await iStorage.storage.getItem(iStorage.keys.USER_AUTH_INFO);
    if (authInfoStr != null) {
      const authInfo = JSON.parse(authInfoStr);
      Object.assign(h, authInfo);
    }
    cookies = h;
    axios.defaults.headers = h;
    console.log("SET HEADERS: " + JSON.stringify(axios.defaults.headers));
  }

  public setDomain(domain: string) {
    axios.defaults.baseURL = domain;
  }

  public async get(api: string, headers: Object | null | undefined = null) {
    try {
      console.log("BaseUrl: " + axios.defaults.baseURL);
      console.log("GET Api: " + api);
      await this.setHeader(headers);
      const response = await axios.get(api);
      const status = response.status;
      const error = response?.data?.error
        ? response?.data?.error?.toString()
        : "";
      const data = response?.data?.data;
      if (status >= 300) {
        console.log(`Response error, status: ${status}, error: ${error}`);
        if (data != null) {
          throw new Error(data);
        }
        throw Error(error);
      }
      console.log(`Response data: ${api}` + JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log("GET error: " + error);
      if (typeof error === "string") {
        throw error;
      } else if (typeof error === "object") {
        if (error?.response?.data?.data != null) {
          throw error?.response?.data?.data;
        } else {
          throw JSON.stringify(error);
        }
      }

      throw error;
    }
  }

  public async post(
    api: string,
    body: Object | null | undefined = {},
    headers: Object | null | undefined = null
  ) {
    try {
      console.log("BaseUrl: " + axios.defaults.baseURL);
      console.log("POST Api: " + api);
      console.log("POST Body: " + JSON.stringify(body));
      await this.setHeader(headers);
      const response = await axios.post(api, body);
      const status = response.status;
      const error = response?.data?.error
        ? response?.data?.error?.toString()
        : "";
      const data = response?.data?.data;
      console.log(`Response data: ${api}` + JSON.stringify(response.data));
      if (status >= 300) {
        console.log(`Response error, status: ${status}, error: ${error}`);
        if (data != null) {
          throw new Error(data);
        }
        throw Error(error);
      }
      console.log(`Response data: ${api}` + JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log("POST error: " + error);
      if (typeof error === "string") {
        throw error;
      } else if (typeof error === "object") {
        if (error?.response?.data?.data != null) {
          throw error?.response?.data?.data;
        } else {
          throw JSON.stringify(error);
        }
      }

      throw error;
    }
  }

  public async delete(api: string, headers: Object | null | undefined = null) {
    try {
      console.log("BaseUrl: " + axios.defaults.baseURL);
      console.log("DELETE Api: " + api);
      await this.setHeader(headers);
      const response = await axios.delete(api);
      const status = response.status;
      const error = response?.data?.error
        ? response?.data?.error?.toString()
        : "";
      const data = response?.data?.data;
      if (status >= 300) {
        console.log(`Response error, status: ${status}, error: ${error}`);
        if (data != null) {
          throw new Error(data);
        }
        throw Error(error);
      }
      console.log(`Response data: ${api}` + JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log("DELETE error: " + error);
      if (typeof error === "string") {
        throw error;
      } else if (typeof error === "object") {
        if (error?.response?.data?.data != null) {
          throw error?.response?.data?.data;
        } else {
          throw JSON.stringify(error);
        }
      }

      throw error;
    }
  }

  public async put(
    api: string,
    body: Object | null | undefined = {},
    headers: Object | null | undefined = null
  ) {
    try {
      console.log("BaseUrl: " + axios.defaults.baseURL);
      console.log("PUT Api: " + api);
      console.log("PUT Body: " + JSON.stringify(body));
      await this.setHeader(headers);
      const response = await axios.put(api, body);
      const status = response.status;
      const error = response?.data?.error
        ? response?.data?.error?.toString()
        : "";
      const data = response?.data?.data;
      if (status >= 300) {
        console.log(`Response error, status: ${status}, error: ${error}`);
        if (data != null) {
          throw new Error(data);
        }
        throw Error(error);
      }
      console.log(`Response data: ${api}` + JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      console.log("PUT error: " + error);

      if (typeof error === "string") {
        throw error;
      } else if (typeof error === "object") {
        if (error?.response?.data?.data != null) {
          throw error?.response?.data?.data;
        } else {
          throw JSON.stringify(error);
        }
      }

      throw error;
    }
  }
}
