import { Reducer, combineReducers } from "redux";
import { homeReducer } from "./home/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
    homePage: homeReducer,
    authPage: authReducer
});
  
export default rootReducer;