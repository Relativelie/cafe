import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "config";
import { refreshToken } from "services/auth";
import { getAccessToken, removeTokens } from "utils/token";

const service = config.service;

const axiosCommonReq = axios.create({
  baseURL: service.BASE_URL,
  withCredentials: true,
});

axiosCommonReq.interceptors.request.use(
  (config) => {
    const authToken = getAccessToken();
    if (authToken) {
      config.headers = {
        Authorization: `Bearer ${authToken}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const handleResponse = (response: AxiosResponse) => response.data;

const handleError = async (error: unknown) => {
  if (axios.isAxiosError(error) && !!error.response && !!error.config) {
    const { status, statusText, data } = error.response;
    if (status === 401) {
      try {
        await refreshToken();
        return await axiosCommonReq.request(error.config);
      } catch (e) {
        removeTokens();
        window.location.href = "/login";
      }
    } else {
      console.log(error, statusText, data);
      //   ! сделать
      //   throw new HttpResponseError(data?.code || status, data?.message || statusText, localizedMessage, timestamp);
    }
  } else {
    console.info("error", error);
    const { message } = error as Error;
    throw new Error(message);
  }
};

axiosCommonReq.interceptors.response.use(handleResponse, handleError);

const getRequest = async (url: string): Promise<any> => {
  return await axiosCommonReq.get(url);
};

const postRequest = async (url: string, payload: object, config?: AxiosRequestConfig) => {
  return await axiosCommonReq.post(url, payload, config);
};

const putRequest = async (url: string, payload: object) => {
  return await axiosCommonReq.put(url, payload);
};

const patchRequest = async (url: string, payload?: object) => {
  return await axiosCommonReq.patch(url, payload);
};

const deleteRequest = async (url: string) => {
  return await axiosCommonReq.delete(url);
};

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
