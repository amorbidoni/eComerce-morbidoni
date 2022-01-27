import React, { useState } from "react";
import "./product.css";

const ProductApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const agregarAlCarrito = () => {
    let productSvg = document.getElementById("product-svg");
    let cartSvg = document.getElementById("cart-svg");
    let cartCounter = document.getElementById("cart-counter");
    productSvg.classList.add("cart__product--animation");
    cartSvg.classList.add("cart__img--animation");
    addProduct();
    cartCounter.textContent = counter;
    setTimeout(() => {
      productSvg.classList.remove("cart__product--animation");
      cartSvg.classList.remove("cart__img--animation");
    }, 1000);
  };

  const addProduct = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button className="btn btn--buy" onClick={agregarAlCarrito}>
        Comprar
      </button>
    </>
  );
};

export default ProductApp;
