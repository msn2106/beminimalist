import { combineReducers } from "redux";
import loggedInUserReducer from "./loggedInUserReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  loggedInUserReducer,
  productReducer,
});

export default rootReducer;
