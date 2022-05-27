import React from "react";
import Drawer from "react-modern-drawer";
import { useNavigate } from "react-router-dom";
import { productList } from "services/mocks/productList";
import closeIcon from "static/svgs/Close.svg";
import { Categories } from "utils/enums";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WishlistDrawer = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();
  const handleOpenItem = (id: string, category: Categories) => {
    navigate(`/${category}/${id}`);
    onClose();
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
          <div className="cart-drawer-content-text">Įsiminti produktai</div>
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
                <button
                  className="cart-drawer-reserve"
                  onClick={(e) => handleOpenItem(product.id, product.category)}
                >
                  Atidaryti
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default WishlistDrawer;
