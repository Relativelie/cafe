import axios from "axios";
import config from "config";
import QueryString from "qs";

const service = config.service;

const axiosReq = axios.create({
  baseURL: service.BASE_RECIPES_URL,
});

axiosReq.interceptors.request.use((config) => {
  config.params = {
    app_key: service.API_RECIPES_KEY,
    app_id: service.API_RECIPES_ID,
    type: "public",
    ...config.params,
  };
  config.paramsSerializer = (p) => {
    return QueryString.stringify(p, {
      arrayFormat: "repeat",
    });
  };
  return config;
});

export const getRequest = async (params?: object, url?: string): Promise<any> => {
  return await axiosReq.get(url ?? "", {
    params: params,
  });
};
