import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
import brandReducer from "./entities/brand/brand.slice";
import userReducer from "./entities/user/user.slice";
import followBrandsReducer from "./entities/followBrand/followBrand.slice";
import { connectRouter } from "connected-react-router";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users: userReducer,
    brands: brandReducer,
    followBrands: followBrandsReducer,
  });

export default rootReducer;
