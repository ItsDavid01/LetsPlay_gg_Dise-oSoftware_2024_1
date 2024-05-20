import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
//import Login from './Login';
import Interface from "./Interface";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Interface" element={<Interface />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
