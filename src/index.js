import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./utils/helpers";
import StarryBackground from "./components/stars";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <StarryBackground />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
