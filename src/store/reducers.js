import { combineReducers } from "redux";
import { LoginReducer as login } from "../routes/Login/module/login";
import { HomeReducer as home } from "../routes/Home/module/home";

export const makeRootReducer = () => {
  return combineReducers({
    login,
    home
  });
};

export default makeRootReducer;
