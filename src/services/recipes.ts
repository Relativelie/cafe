import QueryString from 'qs';
import config from 'config';
import axios from 'axios';
import { FilterType } from 'stores/recipes';
import { getRequest } from './methods';

const url = '/recipes/v2';

const service = config.service;

export const axiosRequest = axios.create({
  baseURL: `${service.BASE_SEVER_URL}${url}`,
});
axiosRequest.interceptors.request.use((config) => {
  config.params = {
    app_key: service.API_RECIPES_KEY,
    app_id: service.API_RECIPES_ID,
    type: 'public',
    ...config.params,
  };
  config.paramsSerializer = (p) => {
    return QueryString.stringify(p, {
      arrayFormat: 'repeat',
    });
  };
  return config;
});

type GetReqParams = {
  diet: string[];
  cuisineType: string[];
  q?: string;
};

const getRecipes = async (filters: FilterType) => {
  const parsedFilters: GetReqParams = {
    ...filters,
    diet: getActiveFilters(filters.diet),
    cuisineType: getActiveFilters(filters.cuisineType),
  };

  if (!parsedFilters.q) {
    delete parsedFilters.q;
  }
  const res = await getRequest(axiosRequest, parsedFilters);
  return res.data;
};

const getNextRecipes = async (url: string) => {
  const res = await getRequest(axiosRequest, undefined, url);
  return res.data;
};

const getActiveFilters = (filters: { [x: string]: boolean }): Array<string> => {
  return Object.keys(filters)
    .map((item) => filters[item] && item)
    .filter(Boolean)
    .map((item) => item as string);
};

export { getRecipes, getNextRecipes };
