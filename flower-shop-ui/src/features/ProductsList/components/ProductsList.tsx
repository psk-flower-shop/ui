import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Categories } from "utils/enums";
import "./ProductsList.scss";
import { useDispatch, useSelector } from "store/storeHooks";
import { selectCategoryProducts } from "../state/productListSelectors";
import { fetchProductsByCategory } from "../state/productListThunks";
import flowerMockImage from "static/images/flowerMock.png";

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

  const dispatch = useDispatch();
  const products = useSelector(selectCategoryProducts);

  const productsCount = products.length;
  const productsCountLabel =
    productsCount % 10 === 1 ? "produktas" : "produktai";

  const handleProductOpen = (id: string, category: Categories) => {
    navigate(`/${category}/${id}`);
  };

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [dispatch, category]);

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
        {products.map((product) => (
          <div
            className="products-list-items-item"
            key={product.id}
            onClick={(e) => handleProductOpen(product.id, product.category)}
          >
            <img alt="flowy" src={flowerMockImage} />
            <div className="products-list-items-item-info">
              <div className="products-list-items-item-text">
                {product.name}
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
