import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { WrapperContextProvider } from "./store/wrapper-context";

ReactDOM.render(
  <BrowserRouter>
    <WrapperContextProvider>
      <App />
    </WrapperContextProvider>
  </BrowserRouter>,
  document.querySelector("#app")
);
