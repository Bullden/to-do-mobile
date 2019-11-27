import { Reducer, combineReducers } from "redux";
import { homeReducer } from "./home/reducer";

const rootReducer = combineReducers({
    homePage: homeReducer
});
  
export default rootReducer;