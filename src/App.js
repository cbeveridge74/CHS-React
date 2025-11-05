import { useEffect, useContext } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";

import "./css/medkit.css";
import NewTask from "./components/Tasks/TaskNew";
import HackPage from "./pages/HackPage";
import AllTasksPage from "./pages/AllTasksPage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import AuthContext from "./store/auth-context";
import AppContext from "./store/app-context";
import WrapperContext from "./store/wrapper-context";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Layout/Header";
import MKPatientWarning from "./components/patientwarning/MKPatientWarning.js";
import ExampleApi from "./pages/ExampleApi";
import AllDocuments from "./pages/AllDocuments";

const App = () => {
  // Loggin in token context
  const wrapperCtx = useContext(WrapperContext);

  // Loggin in token context
  const authCtx = useContext(AuthContext);
  // console.log("authCtx from App js", authCtx);
  // Application context, e.g isbrowser, orgId, countryId
  const appCtx = useContext(AppContext);
  // The useLocation hok from React allows you to get 'the location of the browser URL'
  const location = useLocation();

  // URLSearchParams is a default JS contructor function
  const queryParams = new URLSearchParams(location.search);

  const user = queryParams.get("user");
  const org = queryParams.get("org");
  const country = queryParams.get("country");
  // const timeout = queryParams.get("timeout") || "300000"; // take in param or default to 5 mins
  // console.log("timeout in app.js", timeout);
  // Check to see if the isBrowser query param is set
  const isBrowser = queryParams.get("browser") === "false"; //|| true;
  // console.log("is browser", isBrowser, typeof isBrowser);

  // ###########################

  //let location = useLocation();
  let history = useHistory();
  //const authCtx = useContext(AuthContext);
  // console.log("authCtx from App js", authCtx);
  // Application context, e.g isbrowser, orgId, countryId
  //const appCtx = useContext(AppContext);
  // Now set the route context from the auth component or from the native app
  // Also set the other auth and app context so that the route works
  if (window.chrome.webview != null) {
    window.chrome.webview.addEventListener("message", (event) => {
      console.log(event.data);
      var hostAuthentication = JSON.parse(event.data);
      const expirationTime = new Date(new Date().getTime() + 72000000); // 5 minutes // 1200000)) // 20 minutes, hardwired now, but will be a param
      authCtx.login(
        hostAuthentication.AuthenticationToken,
        expirationTime.toISOString()
      );
      appCtx.setAppContext(false);
      // Unfortunately need to hard code the user (rlin@test2.com) as this data doesn't seem to be part of
      // the hostAuthentication object passed in from VA
      appCtx.setUserId(105);
      // Setting the screen to what was asked for when the app was initially called
      history.replace(wrapperCtx.initialRoute);
    });
  }

  // ##########################

  useEffect(() => {
    wrapperCtx.initialRoute = location.pathname;
    console.log(location.pathname);
    if (isBrowser) {
      appCtx.setAppContext(false);
    } else {
      appCtx.setAppContext(true);
    }
    appCtx.setUserId(user);
    appCtx.setOrgId(org);
    appCtx.setCountry(country);
    // authCtx.tokenExpiresTime = timeout;
  }, []);

  return (
    <Layout>
      {appCtx.isFullBrowserApp && <Header />}
      <Switch>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/tasklist">
            <AllTasksPage />
          {/* {authCtx.isLoggedIn && <AllTasksPage />}
          {!authCtx.isLoggedIn && (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location },
              }}
            />
          )} */}
        </Route>
        <Route path="/newtask">
          <NewTask />
          {/* {authCtx.isLoggedIn && <NewTask />}
          {!authCtx.isLoggedIn && (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: location },
              }}
            />
          )} */}
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/hack">
          <HackPage />
        </Route>
        <Route path="/doclist">
          <AllDocuments />
        </Route>

        <Route path="/example">
          <ExampleApi />
        </Route>
        <Route
          path="/patientwarning"
          exact
          render={(props) => <MKPatientWarning />}
        />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      {/* </Header> */}
    </Layout>
  );
};
export default App;
