import React from "react";
import Home from "./Home";
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipes from "./Recipes";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  // const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cusine/:type" element={<Cusine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipes />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
