import { IS_LOGIN, IS_LOGOUT } from "./type";

const initialState = {
  login: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_LOGIN:
      return {
        ...state,
        login: true,
      };
    case IS_LOGOUT:
      return {
        ...state,
        login: false,
      };
    default:
      return state;
  }
};
