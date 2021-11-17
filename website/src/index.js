import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/css/index.css";
import App from "./App";
import { AppProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
