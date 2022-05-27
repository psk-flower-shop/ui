import React, { useState } from "react";
import { useUser } from "context";
import Navigation from "features/Navigation";
import Footer from "features/Footer";
import "./App.scss";
import CartDrawer from "features/CartDrawer";

const AuthenticatedApp = React.lazy(
  () => import("routes/authenticated/AuthenticatedRoutes")
);

const UnauthenticatedApp = React.lazy(
  () => import("routes/unauthenticated/UnauthenticatedRoutes")
);

function App() {
  const user = useUser();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const handleCartDrawer = () => {
    setIsCartDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className="body">
      <Navigation onOpen={handleCartDrawer} />
      <div className="route-content">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
      <Footer />
      {!user && (
        <>
          <CartDrawer isOpen={isCartDrawerOpen} onClose={handleCartDrawer} />
        </>
      )}
    </div>
  );
}

export default App;
