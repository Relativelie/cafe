import axios from "axios";
import config from "config";

const service = config.service;

const axiosReq = axios.create({
  baseURL: service.BASE_RECIPES_URL,
});

axiosReq.interceptors.request.use((config) => {
  config.params = {
    app_key: service.API_RECIPES_KEY,
    app_id: service.API_RECIPES_ID,
    ...config.params,
  };
  return config;
});

export const getRequest = async (filters: object): Promise<any> => {
  return await axiosReq.get("", { params: filters });
};
