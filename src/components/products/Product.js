import React from "react";
import { useCounter } from "../../hooks/useCounter";

import "./product.scss";

const ProductApp = ({ value }) => {
  // counter
  const { counter, increment } = useCounter(1);

  // animacion agregar al carrito
  const agregarAlCarrito = () => {
    let productSvg = document.getElementById("product-svg");
    let cartSvg = document.getElementById("cart-svg");
    let cartCounter = document.getElementById("cart-counter");
    productSvg.classList.add("cart__product--animation");
    cartSvg.classList.add("cart__img--animation");
    increment();
    cartCounter.textContent = counter;
    setTimeout(() => {
      productSvg.classList.remove("cart__product--animation");
      cartSvg.classList.remove("cart__img--animation");
    }, 1000);
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
