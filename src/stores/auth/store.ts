import { flow, SnapshotIn, types } from "mobx-state-tree";
import { getAccessToken, removeTokens } from "utils/token";
import { login } from "services/auth";
import toast from "react-hot-toast";
import { HttpResponseError } from "errors/errors";
import { Credentials } from "./models";

export const AuthStore = types
  .model("AuthStore", {
    isLoggedIn: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const signIn = flow(function* (credentials: Credentials) {
      try {
        self.isLoggedIn = yield login(credentials);
        return self.isLoggedIn;
      } catch (error) {
        if (error instanceof HttpResponseError) {
          toast.error("Ошибка аутентификации пользователя: " + error.message);
        } else {
          console.info(error);
        }
      }
    });

    const signOut = () => {
      removeTokens();
      self.isLoggedIn = false;
    };

    const checkIsLoggedIn = () => {
      self.isLoggedIn = getAccessToken() !== null;
    };

    return { signIn, signOut, checkIsLoggedIn };
  });

export interface IAuthStore extends SnapshotIn<typeof AuthStore> {}
