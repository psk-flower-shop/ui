import React from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <Header />
      <Categories />
    </div>
  );
};

export default Navigation;
