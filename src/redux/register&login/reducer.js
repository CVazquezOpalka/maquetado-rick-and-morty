import { CREATE_USER } from "./type";

const sesionStorage = localStorage.getItem(`${userName}`)
const initialState = {
  user: sesionStorage ? JSON.parse(sesionStorage) || {
    userName : "",
    email:"",
    password:""
  }
};

const saveSesionInLocalStorage = (userName, data)=>{
  localStorage.setItem(userName, JSON.stringify(data))
}
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
