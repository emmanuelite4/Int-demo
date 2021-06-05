import "./App.css";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";

import configureStore, { history } from "./redux/configureStore";
import LoginScreen from "./screens/LoginScreen";
import Main from "./layouts/Main";
import CustomerScreen from "./screens/CustomerScreen";
import WithAuth from "./hoc/WithAuth";
import FollowBrandScreen from "./screens/FollowBrandScreen";
import Auth from "./layouts/Auth";
import SignupScreen from "./screens/SignupScreen";
import BrandDashboardScreen from "./screens/BrandScreen";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route
            path="/dashboard-customer"
            render={(props) => (
              <WithAuth>
                <Main>
                  <CustomerScreen {...props} />
                </Main>
              </WithAuth>
            )}
            exact
          />
          <Route
            path="/dashboard-brand"
            render={(props) => (
              <WithAuth>
                <Main>
                  <BrandDashboardScreen {...props} />
                </Main>
              </WithAuth>
            )}
            exact
          />
          <Route
            path="/followed-brand/:id"
            render={(props) => (
              <WithAuth>
                <Main>
                  <FollowBrandScreen {...props} />
                </Main>
              </WithAuth>
            )}
            exact
          />
          <Route
            path="/login"
            render={(props) => (
              <Auth title="Log in to your account">
                <LoginScreen {...props} />
              </Auth>
            )}
            exact
          />
          <Route
            path="/signup"
            render={(props) => (
              <Auth title="Create your account">
                <SignupScreen {...props} />
              </Auth>
            )}
            exact
          />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
