import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartProvider';
import { CartForm } from './CartForm';

import { ItemsInCart } from './ItemsIncart';

export const CartApp = () => {
  const { itemsInCart, getTotalPrice, deleteAllItemsInCart } = useCartContext();
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
  };
  return (
    <>
      {itemsInCart.length > 0 ? (
        <div className="cart__container">
          <table className="cart__table">
            <thead>
              <tr>
                <th></th>
                <th>Detalle</th>
                <th>Cantidad</th>
                <th className="text-align-right">Precio unitario</th>
                <th className="text-align-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {itemsInCart.map((p) => (
                <ItemsInCart product={p} key={p.id} />
              ))}
              <tr className="total-row">
                <td colSpan={4}>TOTAL</td>
                <td className="text-align-right">{'$' + getTotalPrice()}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="cart__btns">
            <button
              className="btn__primary--big btn"
              onClick={deleteAllItemsInCart}
            >
              Vaciar carrito
            </button>
            <Link to={'/productos'} className="btn__primary--big btn">
              Seguir comprando
            </Link>
            <button className="btn__primary--big btn" onClick={handleConfirm}>
              Confirmar compra
            </button>
          </div>
          {confirm && (
            <div>
              <CartForm total={getTotalPrice()} carrito={itemsInCart} />
            </div>
          )}
        </div>
      ) : (
        <div className="cart-vacio">
          <p className="cart__alert-text">El carrito de compras esta vacío </p>
          <Link to={'/productos'} className="btn__primary--big btn-link ">
            Ver productos
          </Link>
        </div>
      )}
    </>
  );
};
