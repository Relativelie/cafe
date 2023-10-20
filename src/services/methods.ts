import { AxiosInstance } from 'axios'
import { toast } from 'react-hot-toast'

export const getRequest = async (
  axiosInstance: AxiosInstance,
  params?: unknown,
  url?: string,
): Promise<any> => {
  return await axiosInstance
    .get(url ?? '', {
      params: params,
    })
    .catch((err) => toast.error(`Something went wrong please reload the page. Code: ${err.code}`))
}

export const postRequest = async (
  axiosInstance: AxiosInstance,
  body?: unknown,
  url?: string,
): Promise<any> => {
  return await axiosInstance
    .post(url ?? '', body)
    .catch((err) => toast.error(`Something went wrong please reload the page. Code: ${err.code}`))
}
