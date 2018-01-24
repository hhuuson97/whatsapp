import { combineReducers } from "redux";
import { LoginReducer as login } from "../routes/Login/module/login";

export const makeRootReducer = () => {
  return combineReducers({
    login
  });
};

export default makeRootReducer;
