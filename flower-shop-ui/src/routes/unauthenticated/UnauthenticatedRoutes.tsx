import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "features/Homepage";

const UnauthenticatedRoutes = () => {
  return (
    <div>
      <h1>Unauthenticated App</h1>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default UnauthenticatedRoutes;
