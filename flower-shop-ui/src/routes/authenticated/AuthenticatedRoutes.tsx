import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import Shop from "features/Shop";
import Navigation from "features/Navigation";
import "./AuthenticatedRoutes.scss";

const AuthenticatedRoutes = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default AuthenticatedRoutes;
