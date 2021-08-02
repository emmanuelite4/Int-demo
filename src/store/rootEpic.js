import { combineEpics } from "redux-observable";
import { addBrandStartEpic, addBrandSuccessEpic } from "./entities/brand/brand.epic";
import {
  loginStartEpic,
  loginSuccessEpic,
  signupStartEpic,
  signupSuccessEpic,
} from "./entities/user/user.epic";

const rootEpic = combineEpics(
  loginStartEpic,
  loginSuccessEpic,
  signupStartEpic,
  signupSuccessEpic,
  addBrandStartEpic,
  addBrandSuccessEpic
);

export default rootEpic;
