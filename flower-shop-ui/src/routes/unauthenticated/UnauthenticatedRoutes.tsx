import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import { Login, Register } from "features/Auth";
import Navigation from "features/Navigation";
import "./UnauthenticatedRoutes.scss";

const UnauthenticatedRoutes = () => {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default UnauthenticatedRoutes;
