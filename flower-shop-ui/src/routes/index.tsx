import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import Shop from "features/Shop";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<Homepage />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
    </Routes>
  );
};

export default CustomRoutes;
