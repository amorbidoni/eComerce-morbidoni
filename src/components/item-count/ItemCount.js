import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import './itemCount.scss';

const ItemCount = ({ stock, initial, onAdd, onAddModal, name }) => {
  const { counter, increment, decrement } = useCounter(initial);
  const handleIncrement = () => {
    if (stock > 0 && counter !== stock) {
      increment();
    }
  };
  const handleRest = () => {
    if (counter > 1) {
      decrement();
    }
  };

  return (
    <>
      <div className="card">
        <div
          className={
            onAddModal ? 'card__controllers filter' : 'card__controllers'
          }
        >
          <button className="btn__primary--small" onClick={handleRest}>
            -
          </button>
          <h2>
            {counter}
            <span> ({stock})</span>
          </h2>
          <button className="btn__primary--small" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button
          className={
            onAddModal
              ? 'btn__primary--big btn__add filter'
              : 'btn__primary--big btn__add'
          }
          onClick={() => {
            onAdd(counter);
          }}
        >
          Add
        </button>
        {onAddModal && (
          <div className="card__modal">
            <p className="card__modal--text">
              {counter} unidades de {name} agregadas.
            </p>
            <div className="cart-box">
              <div className="card__modal--product">
                <svg
                  id="product-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M507.31 72.57L439.43 4.69c-6.25-6.25-16.38-6.25-22.63 0l-22.63 22.63c-6.25 6.25-6.25 16.38 0 22.63l-76.67 76.67c-46.58-19.7-102.4-10.73-140.37 27.23L18.75 312.23c-24.99 24.99-24.99 65.52 0 90.51l90.51 90.51c24.99 24.99 65.52 24.99 90.51 0l158.39-158.39c37.96-37.96 46.93-93.79 27.23-140.37l76.67-76.67c6.25 6.25 16.38 6.25 22.63 0l22.63-22.63c6.24-6.24 6.24-16.37-.01-22.62zM179.22 423.29l-90.51-90.51 122.04-122.04 90.51 90.51-122.04 122.04z" />
                </svg>
              </div>
              <div className="card__modal--cart">
                <svg
                  id="cart-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemCount;
