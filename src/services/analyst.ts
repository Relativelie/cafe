/* eslint-disable camelcase */
import config from 'config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TotalNutrientEntity from '../store/analyst/models/TotalNutrientEntity';
import IngredientEntity from '../store/analyst/models/IngredientEntity';
import { AnalystState } from 'store/analyst/models/common';

const url = '/nutrition-details';
const service = config.service;
const params = {
  app_key: service.API_ANALYST_KEY,
  app_id: service.API_ANALYST_ID,
};

export const analystApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${service.BASE_SEVER_URL}` }),
  endpoints: (builder) => ({
    postAnalyst: builder.mutation<AnalystState, Array<string>>({
      query: (ingredients) => {
        const body = { ingr: ingredients };
        return {
          url: url,
          method: 'POST',
          params,
          body,
        };
      },

      transformResponse: (response: any) => {
        const ingredients = response.ingredients.length
          ? response.ingredients.map(({ parsed }: { parsed: Record<string, any> }) =>
              Object.assign({}, IngredientEntity.create(parsed[0])),
            )
          : null;

        const totalNutrient = Object.assign(
          {},
          TotalNutrientEntity.create(response['totalNutrients']),
        );
        const healthLabels = response['healthLabels'];

        return { ingredients, totalNutrient, healthLabels };
      },
    }),
  }),
});

export const { usePostAnalystMutation } = analystApi;
