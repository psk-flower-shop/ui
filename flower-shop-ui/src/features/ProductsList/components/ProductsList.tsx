import React from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "services/mocks/productList";
import "./ProductsList.scss";

type Props = {
  category: string;
};

function convertCategory(category: string): string {
  switch (category) {
    case "flowers": {
      return "Gėlės";
    }
    case "plants": {
      return "Augalai";
    }
    case "gifts": {
      return "Dovanos";
    }
    case "trappings": {
      return "Papuošimai";
    }
    default: {
      return "";
    }
  }
}

const ProductsList = ({ category }: Props) => {
  const navigate = useNavigate();
  const productsCount = productList.length;
  const productsCountLabel =
    productsCount % 10 === 1 ? "produktas" : "produktai";

  const handleProductOpen = (id: string) => {
    navigate(`product/${id}`);
  };

  return (
    <div className="products-list-container">
      <div className="products-list-header">
        <div className="products-list-header-title">
          {convertCategory(category)}
        </div>
        <div className="products-list-header-count">
          {productsCount} {productsCountLabel}
        </div>
      </div>
      <div className="products-list-header-divider" />
      <div className="products-list-items">
        {productList.map((product) => (
          <div
            className="products-list-items-item"
            onClick={(e) => handleProductOpen(product.id)}
          >
            <img alt="flowy" src={product.image} />
            <div className="products-list-items-item-info">
              <div className="products-list-items-item-text">
                {product.title}
              </div>
              <div className="products-list-items-item-price">
                {product.price}&#8364;
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <button className="show-more">Rodyti daugiau</button>
      </div>
    </div>
  );
};

export default ProductsList;
