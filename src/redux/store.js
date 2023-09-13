import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { characterReducer } from "./character/reducer";
import { PaginationReducer } from "./page/reducer";
import { filterReducers } from "./filters/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  character: characterReducer,
  pagination: PaginationReducer,
  filters: filterReducers,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
