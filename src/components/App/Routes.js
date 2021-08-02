import { Redirect, Route, Switch } from "react-router-dom";
import LoginScreen from "../../pages/Login/Login";
import Main from "../../pages/components/Main/Main";
import CustomerScreen from "../../pages/Customer/Customer";
import WithAuth from "../../hoc/WithAuth";
import FollowBrandScreen from "../../pages/FollowBrand/FollowBrand";
import SignupScreen from "../../pages/Signup/Signup";
import BrandDashboardScreen from "../../pages/Brand/Brand";
import { LOG_IN_URL, SIGN_UP_URL } from "../../constants/navigation";

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
