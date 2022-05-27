import React from "react";
import locationIcon from "static/svgs/Location.svg";
// import searchIcon from "static/svgs/Search.svg";
import cartIcon from "static/svgs/Cart.svg";
import wishlistIcon from "static/svgs/Wishlist.svg";
import loginIcon from "static/svgs/Login.svg";
import logoutIcon from "static/svgs/Logout.svg";
import "./Header.scss";
import { useUser } from "context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/auth/AuthContext";

type Props = {
  onCartOpen: () => void;
  onWishlistOpen: () => void;
};

const Header = ({ onCartOpen, onWishlistOpen }: Props) => {
  const { logout } = useAuth();
  const user = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); //NOT SURE IF THIS WILL WORK
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="location-group">
        <img alt="location" src={locationIcon} className="location"></img>
        Vilnius
      </div>
      <div className="main-name">.WET CORE FLOWER SHOP</div>
      <div className="icon-group">
        {/* <img alt="search" src={searchIcon} className="icon-group__icon" /> */}
        {user && (
          <>
            <img
              alt="cart"
              src={cartIcon}
              className="icon-group__icon"
              onClick={(e) => onCartOpen()}
            />
            <img
              alt="wishlist"
              src={wishlistIcon}
              className="icon-group__icon"
              onClick={(e) => onWishlistOpen()}
            />
          </>
        )}
        {user ? (
          <img
            alt="logout"
            src={logoutIcon}
            className="icon-group__icon"
            onClick={handleLogout}
          />
        ) : (
          <img
            alt="login"
            src={loginIcon}
            className="icon-group__icon"
            onClick={handleLogin}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
