import React, { useCallback, useState, useEffect } from "react";

let logoutTimer; // Global variable, set to nothing to start

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  // Get current time in milliseconds
  const currentTime = new Date().getTime();
  // time when token expires
  const adjExpirationTime = new Date(expirationTime).getTime();
  // console.log("Adjusted time", adjExpirationTime);
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  // If less than one minute, don't auto log in
  if (remainingTime <= 6000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null; // Don't want to log the user in
  }
  // If valid token return the stored token, which is still valid
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  // if valid token and duration
  const tokenData = retrieveStoredToken();
  // const initialTimeoutContext = localStorage.getItem("timeout");

  console.log("TokenData in auth-context", tokenData);
  let inititalToken;
  // When the app first loads, check to see if token already exists
  // If exists use as initial state, if not undefined
  if (tokenData) {
    inititalToken = tokenData.token;
  }

  const [token, setToken] = useState();

  // const [timeout, setTimeout] = useState(initialTimeoutContext);
  // can infer state from token
  // if no token, user not logged in, if have token is logged in
  // !!token check if token is truthy.
  // if token is a string that is not empty it will return true, if token is a string that is empty
  // it will return false.
  const userIsLoggedIn = !!token;

  // const authTimeoutContextHandler = (timeout) => {
  //   setTimeout(timeout);
  //   localStorage.setItem("timeout", timeout);
  // };

  const logoutHandler = useCallback(() => {
    console.log("This is logout handler in auth-context");
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    // If timer is set, clear it on logout
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    console.log("loginHandler token", token);
    // console.log("loginHandler expirationTime", expirationTime);

    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    console.log(
      "This is remaining time in auth-context",
      remainingTime,
      typeof remainingTime
    );
    logoutTimer = setTimeout(logoutHandler, remainingTime);
    // console.log("This is logoutTime variable in auth-context", logoutTimer);
  };

  // THIS WAS CAUSING IMMEDIATE LOG OUT - NEEDS LOOKING AT
  useEffect(() => {
    if (tokenData) {
      console.log("Token data in auth-context, only fired if auto login!!");
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    // timeout: authTimeoutContextHandler,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
