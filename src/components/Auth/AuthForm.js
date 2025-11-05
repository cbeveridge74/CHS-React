import { useState, useRef, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import WrapperContext from "../../store/wrapper-context";
import AppContext from "../../store/app-context";
import classes from "./AuthForm.module.css";
import classesSpinner from "../Spinner/Spinner.module.css";

import ErrorMessage from "../ErrorMsg/ErrorMessageDisply";

const AuthForm = (props) => {
  const history = useHistory(); // for loading page and not allowing back
  console.log("History in AuthForm", history);
  // Record location (path of URL so know where to redirect to)
  let location = useLocation();
  //console.log('Location in AuthForm', location.state.from.pathname);
  // Refs
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // App context
  const authCtx = useContext(AuthContext);

  // Wrapper context
  const wrapperCtx = useContext(WrapperContext);
  const appCtx = useContext(AppContext);
  // State
  // const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Dont understand why this isn't working
  const handleKeyPress = (e) => {
    // TT it was buried a bit deeper down in the hierarchy i.e. in nativeHandler
    if (e.nativeEvent.keyCode === 13) {
      submitHandler(e);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Add some validation
    fetch("https://community1.inps.co.uk/v3/session_connections", {
      method: "POST",
      body: JSON.stringify({
        auth_type: "password",
        user_name: enteredEmail,
        secret: enteredPassword,
        role_id: "271",
        client: {
          device_id: "CHS React Web App",
          product_key: "CHSGP",
          product_version: "0.1",
          other_details: "TT",
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setIsLoading(false);
        return res
          .json()

          .then((data) => {
            console.log("ok", data.session.user_display);
            const expirationTime = new Date(new Date().getTime() + 300000); // 5 minutes // 1200000)) // 20 minutes, hardwired now, but will be a param
            authCtx.login(data.token, expirationTime.toISOString());

            //Navigate to the initialRoute.  This is set in the App.js on initial load in useEffect
            history.replace(wrapperCtx.initialRoute);
            // console.log("expiration time in AuthForm", expirationTime.toString());
            authCtx.login(data.token, expirationTime.toString());
            // setIsLogin(true);
            history.push({
              pathname: location.state.from.pathname,
            });
            // history.push("/");
          });
      } else {
        setIsLoading(false);
        console.log("Failed in AuthForm");
        return res.json().then((data) => {
          setErrorMsg("Authentication failed");
          if (data && data.error && data.error.text) {
            setErrorMsg(data.error.text);
          }
        });
      }
    });
  };

  return (
    <section className={classes.auth}>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.button}
            onClick={submitHandler}
          >
            Login
          </button>
        </div>
        <ErrorMessage errorMsg={errorMsg}></ErrorMessage>
        {isLoading && <div className={classesSpinner.loader}></div>}
      </form>
    </section>
  );
};

export default AuthForm;
