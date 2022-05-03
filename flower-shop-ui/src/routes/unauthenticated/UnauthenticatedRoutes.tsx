import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";
import { Login, Register } from "features/Auth";

const UnauthenticatedRoutes = () => {
  return (
    <div>
      <h1>Unauthenticated App</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </div>
  );
};

export default UnauthenticatedRoutes;
