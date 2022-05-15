import React from "react";
import locationIcon from "static/svgs/Location.svg";
import searchIcon from "static/svgs/Search.svg";
import cartIcon from "static/svgs/Cart.svg";
import wishlistIcon from "static/svgs/Wishlist.svg";
import loginIcon from "static/svgs/Login.svg";
import logoutIcon from "static/svgs/Logout.svg";
import "./Header.scss";
import { useUser } from "context";

const Header = () => {
  const user = useUser();
  return (
    <div className="header">
      <div className="location-group">
        <img alt="location" src={locationIcon} className="location"></img>
        Vilnius
      </div>
      <div className="main-name">.WET CORE FLOWER SHOP</div>
      <div className="icon-group">
        <img alt="search" src={searchIcon} className="icon-group__icon" />
        <img alt="cart" src={cartIcon} className="icon-group__icon" />
        <img alt="wishlist" src={wishlistIcon} className="icon-group__icon" />
        {user ? (
        <img alt="logout" src={logoutIcon} className="icon-group__icon" />) : (
        <img alt="login" src={loginIcon} className="icon-group__icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
