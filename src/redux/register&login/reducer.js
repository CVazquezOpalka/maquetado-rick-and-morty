import { CREATE_USER } from "./type";

const initialState = {
  userEmail: "",
};

export const LoginAndRegisterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CREATE_USER:
      return {
        ...state,
        userEmail: payload,
      };
    default:
      return state;
  }
};
