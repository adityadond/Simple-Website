import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, link } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <App />
    </Router>
  </>,

  document.getElementById("root")
);
