import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// components
import App from "./components/App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
