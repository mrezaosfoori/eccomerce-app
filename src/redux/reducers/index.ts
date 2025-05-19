import authReducer from "./auth";
import productReducer from "./products";
import { combineReducers } from "redux";

const rootReducer = combineReducers({auth:authReducer, products: productReducer });

export default rootReducer;
