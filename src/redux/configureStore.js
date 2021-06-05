import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { createBrowserHistory } from "history";

import { routerMiddleware } from "connected-react-router";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./rootEpic";

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

export default function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer(history),

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(routerMiddleware(history))
        .concat(epicMiddleware),
  });

  epicMiddleware.run(rootEpic);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
  }

  return store;
}
