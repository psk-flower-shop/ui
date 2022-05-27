import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Categories } from "utils/enums";
import "./ProductsList.scss";
import {getProducts} from "services/api/productService"

type Props = {
  category: string;
};

type ProductType ={
  id: string,
  category : Categories,
  price: number,
  name: string,
  amount: number
  


}


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
  const [productList, setProducts] = useState<ProductType[]>([]);
  const navigate = useNavigate();
  const productsCount = productList.length;
  const productsCountLabel =
    productsCount % 10 === 1 ? "produktas" : "produktai";

  const handleProductOpen = (id: string, category: Categories) => {
    navigate(`/${category}/${id}`);
  };

  const GetProductsFromApi = async () => {
    const products = await getProducts();
    setProducts(products);
 
  }
  
  useEffect(() => {
    GetProductsFromApi()
  },[])

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
            key={product.id}
            onClick={(e) => handleProductOpen(product.id, product.category)}
          >
            {/* <img alt="flowy" src={product.image} /> */}
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
