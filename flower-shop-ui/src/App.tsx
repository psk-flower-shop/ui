import React, { useState } from "react";
import { useUser } from "context";
import Navigation from "features/Navigation";
import Footer from "features/Footer";
import CartDrawer from "features/CartDrawer";
import WishlistDrawer from "features/WishlistDrawer";
import "./App.scss";

const AuthenticatedApp = React.lazy(
  () => import("routes/authenticated/AuthenticatedRoutes")
);

const UnauthenticatedApp = React.lazy(
  () => import("routes/unauthenticated/UnauthenticatedRoutes")
);

function App() {
  const user = useUser();
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);

  const handleCartDrawer = () => {
    setIsCartDrawerOpen((prevState) => !prevState);
  };

  const handleWishlistDrawer = () => {
    setIsWishlistDrawerOpen((prevState) => !prevState);
  };

  return (
    <div className="body">
      <Navigation
        onCartOpen={handleCartDrawer}
        onWishlistOpen={handleWishlistDrawer}
      />
      <div className="route-content">
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
      <Footer />
      {!user && (
        <>
          <CartDrawer isOpen={isCartDrawerOpen} onClose={handleCartDrawer} />
          <WishlistDrawer
            isOpen={isWishlistDrawerOpen}
            onClose={handleWishlistDrawer}
          />
        </>
      )}
    </div>
  );
}

export default App;
