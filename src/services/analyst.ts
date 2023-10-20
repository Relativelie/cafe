/* eslint-disable camelcase */
import config from 'config'
import axios from 'axios'
import { postRequest } from './methods'

const url = '/nutrition-details'

const service = config.service

export const axiosRequest = axios.create({
  baseURL: `${service.BASE_SEVER_URL}${url}`,
})

axiosRequest.interceptors.request.use((config) => {
  config.params = {
    app_key: service.API_ANALYST_KEY,
    app_id: service.API_ANALYST_ID,
    ...config.params,
  }
  return config
})

const postAnalyst = async (ingredients: Array<string>) => {
  const params = {
    ingr: ingredients,
  }
  const res = await postRequest(axiosRequest, params)
  return res.data
}

export { postAnalyst }
