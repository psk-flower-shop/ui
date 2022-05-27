import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "store/storeHooks";
import plusIcon from "static/svgs/Plus.svg";
import minusIcon from "static/svgs/Minus.svg";
import cartIcon from "static/svgs/Cart.svg";
import wishlistIcon from "static/svgs/Wishlist.svg";
import "./ProductItem.scss";
import { Categories } from "utils/enums";
import { selectProductById } from "features/Dashboard";
import flowerMockImage from "static/images/flowerMock.png";
import { useUser } from "context";
import { selectCategoryProducts } from "features/ProductsList/state/productListSelectors";
import { requestAddToCart } from "services/api/cartService";
import { requestAddToWishlist } from "services/api/wishListService";

const ProductItem = () => {
  const [counter, setCounter] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const user = useUser();

  let { productId } = useParams();

  const categoryProducts = useSelector(selectCategoryProducts);

  const product = useSelector((state) => selectProductById(state, productId));

  const handleCounter = (increment: boolean) => {
    if (increment) {
      setCounter(counter + 1);
    } else if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleProductOpen = (id: string, category: Categories) => {
    navigate(`/${category}/${id}`);
  };

  const handleWishlist = async (productId: string) => {
    if (user && user.id && message === "") {
      try {
        await requestAddToWishlist(user.id, productId);
        setMessage("Sėkmingai pridėta į favoritus!");
      } catch (e) {
        alert("failed to add to wishlist");
      }
    }
  };

  const handleAddToCart = async () => {
    if (user && user.id && product) {
      setLoading(true);
      try {
        await requestAddToCart(user.id, product.id);
        setLoading(false);
      } catch (e) {
        alert("failed to add to cart");
        setLoading(false);
      }
    }
  };

  return (
    <div className="product-item-root">
      {product !== undefined && (
        <div className="product-item-info">
          <img
            alt="produsct-item"
            className="product-item-image"
            src={flowerMockImage}
          />
          <div className="product-item-values">
            <div className="product-item-values-header">
              {product.name} (kaina už vnt.){" "}
              {user && (
                <>
                  <img
                    alt="heart"
                    src={wishlistIcon}
                    style={{ cursor: "pointer" }}
                    onClick={(e) => handleWishlist(product.id)}
                  />
                  {message !== "" ? (
                    <span style={{ color: "green" }}>{message}</span>
                  ) : null}
                </>
              )}
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
              {user && (
                <>
                  <button
                    className="product-item-values-button-blue"
                    onClick={(e) => handleAddToCart()}
                  >
                    {loading ? "Palaukite..." : "Pridėti į krepšelį"}
                  </button>
                  <div className="product-item-values-button-cart">
                    <img alt="carts" src={cartIcon} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="product-item-most-popular">
        <div className="product-item-most-popular-text">
          Populiariausi Produktai
        </div>
        <div className="product-item-most-popular-list">
          {categoryProducts.map(
            (product, index) =>
              index < 4 && (
                <div
                  className="product-item-most-popular-list-item"
                  onClick={(e) =>
                    handleProductOpen(product.id, product.category)
                  }
                >
                  <img alt="flowy" src={flowerMockImage} />
                  <div className="product-item-most-popular-list-item-info">
                    <div className="product-item-most-popular-list-item-info-text">
                      {product.name}
                    </div>
                    <div className="product-item-most-popular-list-item-info-price">
                      {product.price}&#8364;
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
