import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import closeIcon from "static/svgs/Close.svg";
import "react-modern-drawer/dist/index.css";
import "./CartDrawer.scss";
import flowerImageMock from "static/images/flowerMock.png";
import { ProductType } from "features/ProductsList/state/productsListTypes";
import { useUser } from "context";
import { requestCart } from "services/api/cartService";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const user = useUser();
  const handleReserveCall = () => {
    console.log("fuck this shit im out");
  };

  const getCartProducts = async () => {
    try {
      if (user && user.id) {
        const products = await requestCart(user.id);
        setProducts(products);
      }
    } catch (e) {
      alert("failed to get products");
    }
  };

  useEffect(() => {
    getCartProducts();
  }, [isOpen]);

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      className="cart-drawer"
      direction="right"
    >
      <div className="cart-drawer-content">
        <div className="cart-drawer-content-header">
          <div className="cart-drawer-content-text">Jūsų krepšelis</div>
          <img
            alt="close"
            className="cart-drawer-close-icon"
            src={closeIcon}
            onClick={(e) => onClose()}
          />
        </div>
        <div className="cart-drawer-header-divider" />
        <div className="cart-drawer-list">
          {products.map((product) => (
            <div key={product.id} className="cart-drawer-list-item">
              <img
                alt="flowerino"
                src={flowerImageMock}
                className="cart-drawer-image"
              />
              <div>
                <div className="cart-drawer-item-header">
                  <div className="cart-drawer-item-header-text">
                    {product.name}
                  </div>
                  <div className="cart-drawer-item-header-price">
                    {product.price}&#8364;
                  </div>
                </div>
                <div className="cart-drawer-item-quantity">
                  Kiekis: {product.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={(e) => handleReserveCall()}
          className="cart-drawer-reserve"
        >
          Rezervuoti
        </button>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
