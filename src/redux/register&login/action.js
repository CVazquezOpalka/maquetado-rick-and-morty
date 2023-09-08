import { CREATE_USER } from "./type";

export const saveUserInLocalStorage = (userName, data) => {
  localStorage.setItem(`${userName}`, JSON.stringify(data));
};

export const createUser = (data) => ({
  type: CREATE_USER,
  payload: data,
});
