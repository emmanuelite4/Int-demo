import { Redirect, Route, Switch } from "react-router-dom";
import LoginScreen from "./views/screens/LoginScreen/LoginScreen";
import Main from "./views/layouts/Main";
import CustomerScreen from "./views/screens/CustomerScreen";
import WithAuth from "./views/hoc/WithAuth";
import FollowBrandScreen from "./views/screens/FollowBrand/FollowBrandScreen";
import SignupScreen from "./views/screens/SignupScreen";
import BrandDashboardScreen from "./views/screens/BrandScreen";
import { LOG_IN_URL, SIGN_UP_URL } from "./views/contants/navigation";

const Routes = () => {
  return (
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
        path={LOG_IN_URL}
        render={(props) => <LoginScreen {...props} />}
        exact
      />
      <Route
        path={SIGN_UP_URL}
        render={(props) => <SignupScreen {...props} />}
        exact
      />
      <Route exact path="/">
        <Redirect to={LOG_IN_URL} />
      </Route>
    </Switch>
  );
};

export default Routes;
