import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Movies = lazy(() => import("./pages/Movies/Movies.jsx"));
const Search = lazy(() => import("./pages/Search/Search.jsx"));

import "./global.css";
import Loader from "./components/Loader/Loader.jsx";
import InitialPage from "./pages/InitialPage/InitialPage.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route element={<App />}>
            <Route path="/home" element={<Home />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
