import React from "react";
import { useUser } from "context";
import Navigation from "features/Navigation";
import Footer from "features/Footer";
import "./App.scss";

const AuthenticatedApp = React.lazy(
  () => import("routes/authenticated/AuthenticatedRoutes")
);

const UnauthenticatedApp = React.lazy(
  () => import("routes/unauthenticated/UnauthenticatedRoutes")
);

function App() {
  const user = useUser();

  return (
    <div className="body">
      <Navigation />
      <div className="route-content">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
