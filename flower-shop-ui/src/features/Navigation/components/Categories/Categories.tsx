import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <nav>
        <Link to="/" className="link">
          Titulinis
        </Link>
        <Link to="/flowers" className="link">
          Gelės
        </Link>
        <Link to="/plants" className="link">
          Augalai
        </Link>
        <Link to="/gifts" className="link">
          Dovanos
        </Link>
        <Link to="/trappings" className="link">
          Papuošimai
        </Link>
      </nav>
    </div>
  );
};

export default Categories;
