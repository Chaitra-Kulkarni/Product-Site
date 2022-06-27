import { useState } from "react";
import CategoryList from "./CategoryList";
import Header from "./Header";
import Products from "./Products";
import ViewButton from "./ViewButton";
import "./Wrapper.css";

const Wrapper = () => {
  const [products, setProducts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  const getProducts = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
      });
  };

  return (
    <>
      <Header />
      <ViewButton getProducts={getProducts} />
      <div className="products-list-container">
        <CategoryList />
        <Products products={products} />
      </div>
    </>
  );
};

export default Wrapper;
