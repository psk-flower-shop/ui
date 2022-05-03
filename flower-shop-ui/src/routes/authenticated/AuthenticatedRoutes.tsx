import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import Shop from "features/Shop";

const AuthenticatedRoutes = () => {
  return (
    <div>
      <h1>Authenticated App</h1>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </div>
  );
};

export default AuthenticatedRoutes;
