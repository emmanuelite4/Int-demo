import { ofType } from "redux-observable";
import { push } from "connected-react-router";
import { switchMap, map } from "rxjs/operators";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  signupFailed,
  signupStart,
  signupSuccess,
} from "./user.slice";

import { of } from "rxjs";
import { addBrandStart } from "../brand/brand.slice";

export const loginStartEpic = (action$, state$) =>
  action$.pipe(
    ofType(loginStart),
    switchMap((action$) =>
      of(state$.value.users.users).pipe(
        map((users$) =>
          users$.filter(
            (user) =>
              user.email === action$.payload.email &&
              user.password === action$.payload.password
          )
        ),
        map((users) =>
          users.length > 0
            ? loginSuccess(users[0])
            : loginFailed("Email or password is incorrect")
        )
      )
    )
  );

export const loginSuccessEpic = (action$) =>
  action$.pipe(
    ofType(loginSuccess),
    map((action) =>
      action.payload.type === "brand"
        ? push("/dashboard-brand")
        : push("/dashboard-customer")
    )
  );

export const signupStartEpic = (action$, state$) =>
  action$.pipe(
    ofType(signupStart),
    switchMap((action$) =>
      of(state$.value.users.users).pipe(
        map((users$) =>
          users$.filter((user) => user.email === action$.payload.user.email)
        ),
        map((users) =>
          users.length > 0
            ? signupFailed("An account with this email already exists")
            : signupSuccess(action$.payload)
        )
      )
    )
  );

export const signupSuccessEpic = (action$) =>
  action$.pipe(
    ofType(signupSuccess),
    map((action) =>
      action.payload.user.type === "brand"
        ? addBrandStart(action.payload.brand)
        : push("/dashboard-customer")
    )
  );
