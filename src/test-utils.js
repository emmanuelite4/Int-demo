// test-utils.js
import React from "react";
// import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/rootReducer";
import { history } from "./application/configureStore";
import { ConnectedRouter } from "connected-react-router";
import { mount } from "enzyme";

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer(history), initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{children}</ConnectedRouter>
      </Provider>
    );
  }
  return mount(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { render };
