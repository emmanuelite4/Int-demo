import { of } from "rxjs";
import { ofType } from "redux-observable";
import { push } from "connected-react-router";
import { switchMap, map } from "rxjs/operators";
import { addBrandFailed, addBrandStart, addBrandSuccess } from "./brand.slice";

export const addBrandStartEpic = (action$, state$) =>
  action$.pipe(
    ofType(addBrandStart),
    switchMap((action$) =>
      of(state$.value.brands.brands).pipe(
        map((brands$) =>
          brands$.filter((brand) => brand.email === action$.payload.symbol)
        ),

        map((brands) =>
          brands.length > 0
            ? addBrandFailed("A brand with this symbol already exists")
            : addBrandSuccess(action$.payload)
        )
      )
    )
  );

export const addBrandSuccessEpic = (action$) =>
  action$.pipe(
    ofType(addBrandSuccess),
    map(() => push("/dashboard-brand"))
  );
