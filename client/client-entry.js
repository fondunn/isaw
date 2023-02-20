import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
const container = document.getElementById("core-container");
const root = createRoot(container);
root.render(
  // <BrowserRouter>
  <App />
  // </BrowserRouter>
);
