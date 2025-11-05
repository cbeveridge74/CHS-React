import React from "react";
import { AuthContextProvider } from "./auth-context";
import { AppContextProvider } from "./app-context";
import MKTheme from "../components/Medkit/MKTheme";
import { ThemeProvider } from "@material-ui/core/styles";

const WrapperContext = React.createContext({
  initialRoute: "",
  setInitialRoute: (route) => {},
  noAuthRoute: "",
  setNoAuthRoute: (route) => {},
});

const contextValue = {
  initialRoute: "",
  noAuthRoute: "/auth",
};

export const WrapperContextProvider = (props) => {
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <WrapperContext.Provider value={contextValue}>
          <ThemeProvider theme={MKTheme()}>{props.children}</ThemeProvider>
        </WrapperContext.Provider>
      </AuthContextProvider>
    </AppContextProvider>
  );
};
export default WrapperContext;
