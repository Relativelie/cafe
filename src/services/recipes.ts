/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from 'config';
import { Filter, RecipeResponse } from 'store/recipes/models/common';
import { convertRecipeResponse, getActiveFilters } from 'utils/recipes';

const url = '/recipes/v2';
const service = config.service;
const commonParams = {
  app_key: service.API_RECIPES_KEY,
  app_id: service.API_RECIPES_ID,
  type: 'public',
};

export const recipesApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${service.BASE_SEVER_URL}` }),
  endpoints: (builder) => ({
    getRecipes: builder.query<RecipeResponse, Filter>({
      query: (filters) => {
        const dietFilters = getActiveFilters(filters.diet, 'diet');
        const cuisineTypeFilters = getActiveFilters(filters.cuisineType, 'cuisineType');
        const urlParams = `?${dietFilters}&${cuisineTypeFilters}`;

        return {
          url: `${url}${urlParams}`,
          method: 'GET',
          params: { ...commonParams, q: filters.q ?? '' },
        };
      },

      transformResponse: convertRecipeResponse,
    }),
    getNextRecipes: builder.query<RecipeResponse, string>({
      query: (url) => ({
        url: url,
        method: 'GET',
        params: commonParams,
      }),
      transformResponse: convertRecipeResponse,
    }),
  }),
});

export const getNextRecipes = recipesApi.endpoints.getNextRecipes;
export const getRecipes = recipesApi.endpoints.getRecipes;
