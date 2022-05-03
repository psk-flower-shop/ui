import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import Shop from "features/Shop";

const AuthenticatedRoutes = () => {
  return (
    <div>
      <h1>Authenticated App</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
};

export default AuthenticatedRoutes;
