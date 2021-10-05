import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import path from "path";
import dotenv  from 'dotenv'
dotenv.config({ path: '/custom/path/to/.env' })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
