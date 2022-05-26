import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "store/storeHooks";
import { State } from "store/storeTypes";
import { productList } from "services/mocks/productList";
import plusIcon from "static/svgs/Plus.svg";
import minusIcon from "static/svgs/Minus.svg";
import cartIcon from "static/svgs/Cart.svg";
import "./ProductItem.scss";
import { Categories } from "utils/enums";

const selectProductById = (state: State, id: number) => {
  return productList[0];
};

const ProductItem = () => {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();

  let { productId } = useParams();

  const product = useSelector((state) =>
    selectProductById(state, productId as unknown as number)
  );

  const handleCounter = (increment: boolean) => {
    if (increment) {
      setCounter(counter + 1);
    } else if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleProductOpen = (id: number, category: Categories) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <div className="product-item-root">
      <div className="product-item-info">
        <img
          alt="product-item"
          className="product-item-image"
          src={product.image}
        />
        <div className="product-item-values">
          <div className="product-item-values-header">
            {product.title} (kaina už vnt.)
          </div>
          <div className="product-item-values-price">
            {product.price}&#8364;
          </div>
          <div className="product-item-values-divider" />
          <div className="product-item-values-quantity-text">Kiekis:</div>
          <div className="product-item-values-quantity-counter">
            <img
              alt="plus"
              src={plusIcon}
              className="product-item-values-icon"
              onClick={(e) => handleCounter(true)}
            />
            <span className="product-item-values-quantity-counter-text">
              {counter}
            </span>
            <img
              alt="minus"
              src={minusIcon}
              className="product-item-values-icon"
              onClick={(e) => handleCounter(false)}
            />
          </div>
          <div className="product-item-values-buttons">
            <button className="product-item-values-button-blue">
              Pridėti į krepšelį
            </button>
            <div className="product-item-values-button-cart">
              <img alt="carts" src={cartIcon} />
            </div>
          </div>
        </div>
      </div>
      <div className="product-item-most-popular">
        <div className="product-item-most-popular-text">
          Populiariausi Produktai
        </div>
        <div className="product-item-most-popular-list">
          {productList.map((product) => (
            <div
              className="product-item-most-popular-list-item"
              onClick={(e) => handleProductOpen(product.id, product.category)}
            >
              <img alt="flowy" src={product.image} />
              <div className="product-item-most-popular-list-item-info">
                <div className="product-item-most-popular-list-item-info-text">
                  {product.title}
                </div>
                <div className="product-item-most-popular-list-item-info-price">
                  {product.price}&#8364;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;