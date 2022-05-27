import React from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import "./Navigation.scss";

type Props = {
  onOpen: () => void;
};

const Navigation = ({ onOpen }: Props) => {
  return (
    <div className="navigation">
      <Header onOpen={onOpen} />
      <Categories />
    </div>
  );
};

export default Navigation;
