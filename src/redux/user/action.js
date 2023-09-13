import { IS_LOGIN, IS_LOGOUT } from "./type";

export const isLogin = () => ({
  type: IS_LOGIN,
});

export const isLogout = () => ({
  type: IS_LOGOUT,
});
