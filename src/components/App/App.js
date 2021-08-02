import "./App.css";
import { Provider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "../../store/configureStore";

import Routes from "./Routes";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
