import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "features/Dashboard";
import ProductsList from "features/ProductsList";
import ProductItem from "features/ProductItem";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/flowers" element={<ProductsList category="flowers" />} />
      <Route path="/plants" element={<ProductsList category="plants" />} />
      <Route path="/gifts" element={<ProductsList category="gifts" />} />
      <Route
        path="/trappings"
        element={<ProductsList category="trappings" />}
      />
      <Route path="/:categoryName/:productId" element={<ProductItem />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
