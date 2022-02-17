import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import CartWidgetApp from "../cart/CartWidget";

import "./itemCount.scss";

const ItemCount = ({ stock, initial }) => {
  const [onaddModal, setOnaddModal] = useState(false);
  const { counter, increment, decrement } = useCounter(initial);
  const handleIncrement = () => {
    if (stock > 0 && counter !== stock) {
      increment();
    }
  };
  const handleRest = () => {
    if (counter > 0) {
      decrement();
    }
  };
  const onAdd = () => {
    setOnaddModal(true);

    setTimeout(() => {
      setOnaddModal(false);
    }, 2000);
  };

  return (
    <>
      <div className="card">
        <div
          className={
            onaddModal ? "card__controllers filter" : "card__controllers"
          }
        >
          <button className="btn__primary--small" onClick={handleRest}>
            -
          </button>
          <h2>{counter}</h2>
          <button className="btn__primary--small" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button
          className={
            onaddModal
              ? "btn__primary--big btn__add filter"
              : "btn__primary--big btn__add"
          }
          onClick={onAdd}
        >
          Add
        </button>
        {onaddModal && (
          <div className="card__modal">
            <p>Producto agregado</p>
            <svg
              width="30"
              height="24"
              viewBox="0 0 30 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.667 2.66699L13.2357 19.9845C12.5801 20.7712 12.2523 21.1646 11.8118 21.1846C11.3712 21.2045 11.0092 20.8425 10.285 20.1184L2.33366 12.167"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCount;
