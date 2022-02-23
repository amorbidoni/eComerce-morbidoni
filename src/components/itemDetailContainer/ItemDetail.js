import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images';
import ItemCount from '../item-count/ItemCount';
import './itemDetail.scss';

export const ItemDetailApp = ({ item }) => {
  const [onAddModal, setOnaddModal] = useState(false);
  const [inCart, setInCart] = useState(false);
  const onAdd = (counter) => {
    setInCart(true);
    setOnaddModal(true);

    setTimeout(() => {
      setOnaddModal(false);
    }, 2000);
  };
  return (
    <div className="product-detail">
      <div
        className={
          item.name === undefined
            ? 'product-detail__left-box'
            : 'product-detail__left-box left-box-animation '
        }
      >
        <img src={img.logoCavaTransBlanco} alt="inicio" />
        {/* <ItemCount stock={item.stock} colorLight={true} /> */}
      </div>
      <img className="product-detail__image" src={item.image} alt={item.name} />
      <div
        className={
          item.name === undefined
            ? 'product-detail__detail'
            : 'product-detail__detail detail-animation'
        }
      >
        <h2 className={item.name === undefined ? '' : 'detail-text-animation'}>
          {item.name}
        </h2>
        <p className={item.name === undefined ? '' : 'detail-text-animation '}>
          {item.detail}
        </p>
        <p className={item.name === undefined ? '' : 'detail-text-animation '}>
          {item.price === undefined ? '' : '$' + item.price}
        </p>
        <div className="item-count">
          {!inCart ? (
            <ItemCount
              onAdd={onAdd}
              onAddModal={onAddModal}
              stock={item.stock}
              initial={1}
              name={item.name}
            />
          ) : (
            <Link to="/carrito" className="btn__end">
              Finalizar compra
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
