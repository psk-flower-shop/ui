import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes";

function App() {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
