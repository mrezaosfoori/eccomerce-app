import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const AppContainer = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppContainer;
