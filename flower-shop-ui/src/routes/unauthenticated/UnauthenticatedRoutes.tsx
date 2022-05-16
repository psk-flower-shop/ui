import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "features/Auth";
import Dashboard from "features/Dashboard";

const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default UnauthenticatedRoutes;
