import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { characterReducer } from "./character/reducer";
import { PaginationReducer } from "./page/reducer";
import { LoginAndRegisterReducer } from "../redux/register&login/reducer";
import { filterReducers } from "./filters/reducer";

const rootReducer = combineReducers({
  character: characterReducer,
  pagination: PaginationReducer,
  users: LoginAndRegisterReducer,
  filters: filterReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
