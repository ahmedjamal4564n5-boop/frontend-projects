import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PrivedContext from "./componet/context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrivedContext>
        <App />
      </PrivedContext>
    </BrowserRouter>
  </React.StrictMode>
);
