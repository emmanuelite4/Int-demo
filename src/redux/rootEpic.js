import { combineEpics } from "redux-observable";
import { addBrandStartEpic, addBrandSuccessEpic } from "./brand/brand.epic";
import {
  loginStartEpic,
  loginSuccessEpic,
  signupStartEpic,
  signupSuccessEpic,
} from "./user/user.epic";

const rootEpic = combineEpics(
  loginStartEpic,
  loginSuccessEpic,
  signupStartEpic,
  signupSuccessEpic,
  addBrandStartEpic,
  addBrandSuccessEpic
);

export default rootEpic;
