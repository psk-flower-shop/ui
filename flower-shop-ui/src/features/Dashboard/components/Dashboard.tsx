import React from "react";
import { useNavigate } from "react-router-dom";
import flowersImage from "static/images/flowers.png";
import giftsImage from "static/images/gifts.png";
import plantsImage from "static/images/plants.png";
import arrowIcon from "static/svgs/Arrow.svg";
import "./Dashboard.scss";
import { productList } from "services/mocks/productList";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleProductOpen = (id: string) => {
    navigate(`product/${id}`);
  };

  return (
    <>
      <div className="dashboard-root">
        <div className="flowers-container">
          <img alt="flowers" src={flowersImage} />
          <div className="flowers-content">
            <div className="flowers-best-text">Gražiausios Vilniaus Gėlės!</div>
            <div className="flowers-offer-text">
              Prašome peržiūrėti mūsų gėlių asortimentą!
            </div>
            <button
              className="flowers-button"
              onClick={() => navigate("/flowers")}
            >
              <span className="flowers-button-text">Peržiūrėti</span>
              <img alt="flowers-go" src={arrowIcon} />
            </button>
          </div>
        </div>
        <div className="gifts-plants">
          <div className="gifts-container">
            <img alt="gifts" src={giftsImage} />
            <div className="gifts-content">
              <div className="gifts-best-text">Dovanėlės</div>
              <div className="gifts-offer-text">
                Padarykite progą dar ypatingesne su šiomis dovanomis!
              </div>
              <button
                className="gifts-button"
                onClick={() => navigate("/gifts")}
              >
                <span className="gifts-button-text">Peržiūrėti</span>
                <img alt="gifts-go" src={arrowIcon} />
              </button>
            </div>
          </div>
          <div className="plants-container">
            <img alt="plants" src={plantsImage} />
            <div className="plants-content">
              <div className="plants-best-text">Augalai</div>
              <div className="plants-offer-text">
                Ilgalaikis džiaugsmas namams!
              </div>
              <button
                className="plants-button"
                onClick={() => navigate("/plants")}
              >
                <span className="plants-button-text">Peržiūrėti</span>
                <img alt="plants-go" src={arrowIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="new-products">
        <div className="products-text">Naujausi Produktai</div>
        <div className="products-list">
          {productList.map((product) => (
            <div
              className="product-item"
              onClick={(e) => handleProductOpen(product.id)}
            >
              <img alt="flowy" src={product.image} />
              <div className="product-info">
                <div className="product-item-text">{product.title}</div>
                <div className="product-item-price">{product.price}&#8364;</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="popular-products">
        <div className="products-text">Populiariausi Produktai</div>
        <div className="products-list">
          {productList.map((product) => (
            <div
              className="product-item"
              onClick={(e) => handleProductOpen(product.id)}
            >
              <img alt="flowy" src={product.image} />
              <div className="product-info">
                <div className="product-item-text">{product.title}</div>
                <div className="product-item-price">{product.price}&#8364;</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;