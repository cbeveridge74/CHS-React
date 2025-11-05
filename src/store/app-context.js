import React, { useState } from "react";

const AppContext = React.createContext({
  isFullBrowserApp: true,
  setAppContext: (isFullBrowserApp) => {},
  userId: "",
  setUserId: (userId) => {},
  orgId: "",
  setOrgId: (orgId) => {},
  country: "England",
  setCountry: (country) => {},
});

export const AppContextProvider = (props) => {
  // When the app first loads, check to see if full browser apps
  // If exists use as initial state, if not undefined

  const inititalAppContext = localStorage.getItem("isFullBrowserApp");
  const [isFullBrowserApp, setIsFullBrowserApp] = useState(inititalAppContext);
  const inititalUserContext = localStorage.getItem("userId");
  const [userId, setUserId] = useState(inititalUserContext);
  const inititalOrgContext = localStorage.getItem("orgId");
  const [orgId, setOrgId] = useState(inititalOrgContext);
  const inititalCountryContext = localStorage.getItem("country");
  const [country, setCountryId] = useState(inititalCountryContext);

  const appContextHandler = (isFullBrowserApp) => {
    // console.log('appContextHandler', isFullBrowserApp );
    setIsFullBrowserApp(isFullBrowserApp);
    // Store context in local storage
    localStorage.setItem("isFullBrowserApp", isFullBrowserApp);
  };

  const appUserContextHandler = (userId) => {
    setUserId(userId);
    localStorage.setItem("userId", userId);
  };

  const appOrgIdContextHandler = (orgId) => {
    setOrgId(orgId);
    localStorage.setItem("orgId", orgId);
  };

  const appCountryIdContextHandler = (country) => {
    setCountryId(country);
    localStorage.setItem("country", country);
  };

  const contextValue = {
    isFullBrowserApp: isFullBrowserApp,
    setAppContext: appContextHandler,
    userId: userId,
    setUserId: appUserContextHandler,
    orgId: orgId,
    setOrgId: appOrgIdContextHandler,
    country: country,
    setCountry: appCountryIdContextHandler,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
