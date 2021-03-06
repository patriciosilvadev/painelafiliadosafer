import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));

const RememberPassword = React.lazy(() =>
  import("./views/pages/rememberPassword/RememberPassword")
);

const Register = React.lazy(() => import("./views/pages/register/Register"));

const SimplifiedRegistration = React.lazy(() =>
  import("./views/pages/simplifiedRegistration/SimplifiedRegistration")
);

const AffiliateRegistration = React.lazy(() =>
  import("./views/pages/affiliateRegistration/AffiliateRegistration")
);

const AffiliatePJ = React.lazy(() =>
  import("./views/pages/affiliatePJ/AffiliatePJ")
);

const AffiliatePF = React.lazy(() =>
  import("./views/pages/affiliatePF/AffiliatePF")
);

const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/remember-password"
              name="Remember Password"
              render={(props) => <RememberPassword {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/simplified-registration"
              name="Simplified Registration"
              render={(props) => <SimplifiedRegistration {...props} />}
            />
            <Route
              exact
              path="/affiliate-registration"
              name="Affiliate Registration"
              render={(props) => <AffiliateRegistration {...props} />}
            />
            <Route
              exact
              path="/affiliate-pj"
              name="Affiliate PJ"
              render={(props) => <AffiliatePJ {...props} />}
            />
            <Route
              exact
              path="/affiliate-pf"
              name="Affiliate PF"
              render={(props) => <AffiliatePF {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/dashboard"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
