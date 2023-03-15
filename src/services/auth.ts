import axios from "axios";
import { Credentials } from "stores/auth/models";
import { removeTokens, setAccessToken, setRefreshToken } from "utils/token";
import { postRequest } from "./common/methods";

export const refreshToken = async () => {
  const response = await axios.get(`/refresh`, { withCredentials: true });
  setAccessToken(response.data.accessToken);
};

export const login = async ({ email, password }: Credentials) => {
  removeTokens();
  const res = await postRequest("/login", { email, password });
  const authData = res.data;
  if (res.status === 200) {
    setAccessToken(authData.access_token);
    setRefreshToken(authData.refresh_token);
    return true;
  } else {
    return false;
  }
};
