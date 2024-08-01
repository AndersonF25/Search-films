import React from "react";
import { Route, Routes } from "react-router-dom";
import InitialPage from "../pages/InitialPage/InitialPage";
import Movies from "../pages/Movies/Movies";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/movie/:id" element={<Movies />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default RoutesProvider;
