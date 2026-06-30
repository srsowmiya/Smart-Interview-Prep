import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


import Login from './components/home/Login'
import App from "./App";
import "./index.css";
import Signup from './components/home/Signup'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Signup />
    </BrowserRouter>
  </React.StrictMode>
);