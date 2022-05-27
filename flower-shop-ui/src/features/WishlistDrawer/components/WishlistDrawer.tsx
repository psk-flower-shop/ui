import { useUser } from "context";
import { ProductType } from "features/ProductsList/state/productsListTypes";
import React, { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import { useNavigate } from "react-router-dom";
import closeIcon from "static/svgs/Close.svg";
import { Categories } from "utils/enums";
import flowerMockImage from "static/images/flowerMock.png";
import { requestWishlist } from "services/api/wishListService";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const WishlistDrawer = ({ isOpen, onClose }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const user = useUser();
  const navigate = useNavigate();

  const handleOpenItem = (id: string, category: Categories) => {
    navigate(`/${category}/${id}`);
    onClose();
  };

  const getWishlist = async () => {
    try {
      if (user && user.id && isOpen) {
        const products = await requestWishlist(user.id);
        setProducts(products);
      }
    } catch (e) {
      alert("failed to get wishlist");
    }
  };

  useEffect(() => {
    getWishlist();
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
          {products.map((product) => (
            <div key={product.id} className="cart-drawer-list-item">
              <img
                alt="flowerino"
                src={flowerMockImage}
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
