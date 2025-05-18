import authReducer from "./auth";
import productReducer from "./products";

const rootReducer = combineReducers({auth:authReducer, products: productReducer });

export default rootReducer;
