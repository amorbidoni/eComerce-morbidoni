import React, { useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";

import "./product.scss";

const ProductApp = ({ value }) => {
  // counter
  const { counter, increment, decrement, resetCounter } = useCounter(0);

  // animacion agregar al carrito
  const agregarAlCarrito = () => {
    let cartCounter = document.getElementById("cart-counter");
    let productSvg = document.getElementById("product-svg");
    let cartSvg = document.getElementById("cart-svg");
    productSvg.classList.add("cart__product--animation");
    cartSvg.classList.add("cart__img--animation");
    increment();
    console.log(counter);
    cartCounter.textContent = counter;
    setTimeout(() => {
      productSvg.classList.remove("cart__product--animation");
      cartSvg.classList.remove("cart__img--animation");
    }, 1000);
  };
  const eliminarDelCarrito = () => {
    let cartCounter = document.getElementById("cart-counter");
    console.log(counter);
    decrement();
    cartCounter.textContent = counter;
  };
  const resetCarrito = () => {
    let cartCounter = document.getElementById("cart-counter");
    console.log(counter);
    resetCounter();
    cartCounter.textContent = counter;
  };
  console.log("se inicia");

  return (
    <>
      <button
        className="btn__primary--medium btn--buy"
        onClick={agregarAlCarrito}
      >
        +
      </button>
      <button className="btn__primary--medium btn--buy" onClick={resetCarrito}>
        Eliminar Todos
      </button>
      <button
        className="btn__primary--medium btn--buy"
        onClick={eliminarDelCarrito}
      >
        _
      </button>
    </>
  );
};

export default ProductApp;
