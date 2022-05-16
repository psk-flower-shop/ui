import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "features/Dashboard";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
