import React from "react";
import Drawer from "react-modern-drawer";
import closeIcon from "static/svgs/Close.svg";
import "react-modern-drawer/dist/index.css";
import "./CartDrawer.scss";
import { productList } from "services/mocks/productList";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const handleReserveCall = () => {
    console.log("fuck this shit im out");
  };

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
          {productList.map((product) => (
            <div key={product.id} className="cart-drawer-list-item">
              <img
                alt="flowerino"
                src={product.image}
                className="cart-drawer-image"
              />
              <div>
                <div className="cart-drawer-item-header">
                  <div className="cart-drawer-item-header-text">
                    {product.title}
                  </div>
                  <div className="cart-drawer-item-header-price">
                    {product.price}&#8364;
                  </div>
                </div>
                <div className="cart-drawer-item-quantity">Kiekis: 5</div>
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
