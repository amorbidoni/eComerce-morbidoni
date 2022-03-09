import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../item-count/ItemCount';
import './itemDetail.scss';
import { useCartContext } from '../context/CartProvider';

export const ItemDetailApp = ({ item }) => {
  const { addItem, isInCart, deleteItem } = useCartContext();

  const [onAddModal, setOnaddModal] = useState(false);

  const onAdd = (counter) => {
    setOnaddModal(true);
    addItem(item, counter);
    setTimeout(() => {
      setOnaddModal(false);
    }, 2000);
  };
  return (
    <div className="product-detail">
      <img
        className={
          item.name
            ? 'product-detail__image image-animation'
            : 'product-detail__image'
        }
        src={item.image}
        alt={item.name}
      />
      <div
        className={
          item.name
            ? 'product-detail__detail detail-animation'
            : 'product-detail__detail'
        }
      >
        <h2 className={item.name && 'detail-text-animation'}>{item.name}</h2>
        <p className={item.name && 'detail-text-animation'}>{item.detail}</p>
        <p className={item.name && 'detail-text-animation '}>
          {item.price ? '' : '$' + item.price}
        </p>
        <div className={!isInCart ? 'item-count' : 'item-count item-in-cart'}>
          {!isInCart(item.id) ? (
            <ItemCount
              onAdd={onAdd}
              onAddModal={onAddModal}
              stock={item.stock}
              initial={1}
              name={item.name}
              className="item-count--btns"
            />
          ) : (
            <div className="item-in-cart">
              <p>El producto ya se encuentra en el carrito</p>
              <Link to="/carrito" className="btn__end">
                Ver carrito
              </Link>
              <button
                className="btn__end"
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Eliminar del carrito
              </button>
              <Link className="btn__end" to={'/productos'}>
                Seguir comprando
              </Link>{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
