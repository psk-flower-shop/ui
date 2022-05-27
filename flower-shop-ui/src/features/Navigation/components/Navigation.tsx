import React from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import "./Navigation.scss";

type Props = {
  onCartOpen: () => void;
  onWishlistOpen: () => void;
};

const Navigation = ({ onCartOpen, onWishlistOpen }: Props) => {
  return (
    <div className="navigation">
      <Header onCartOpen={onCartOpen} onWishlistOpen={onWishlistOpen} />
      <Categories />
    </div>
  );
};

export default Navigation;
