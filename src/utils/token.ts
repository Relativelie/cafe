import LOCAL_STORAGE_KEYS from "constants/localStorageKeys";

export const getAccessToken = () => localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

export const getExpireDate = () => localStorage.getItem(LOCAL_STORAGE_KEYS.EXPIRES_IN);

export const getRefreshExpireDate = () =>
  localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_EXPIRES_IN);

export const setAccessToken = (accessToken: string) =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);

export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

export const removeTokens = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
};
