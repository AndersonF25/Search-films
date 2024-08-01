import "./global.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import Loader from "./components/Loader/Loader.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
