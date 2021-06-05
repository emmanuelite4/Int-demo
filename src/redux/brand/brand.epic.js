import { ofType } from "redux-observable";
import { push } from "connected-react-router";
import { switchMap, map } from "rxjs/operators";

import { of } from "rxjs";
import { addBrandSuccess } from "./brand.slice";

export const addBrandStartEpic = (action$, state$) =>
  action$.pipe(
    ofType("brand/addBrandStart"),
    switchMap((action$) => of(action$.payload).pipe(map(addBrandSuccess)))
  );

export const addBrandSuccessEpic = (action$) =>
  action$.pipe(
    ofType("brand/addBrandSuccess"),
    map(() => push("/dashboard-brand"))
  );
