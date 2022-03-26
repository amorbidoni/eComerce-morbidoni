import React, { memo } from 'react';
import { useCartContext } from '../context/CartProvider';
import ItemCount from '../item-count/ItemCount';
import './item.scss';
import { Link } from 'react-router-dom';
import { SearchWidget } from './SearchWidget';
export const Item = memo(({ product }) => {
  const { addItem, isInCart, deleteItem } = useCartContext();
  const onAdd = (counter) => {
    addItem(product, counter);
  };
  return (
    <div className="product-card">
      <div className="search-icon__box">
        <SearchWidget itemId={product.id} />
      </div>
      <div className="row">
        <div className="product-card__image--box">
          <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-card__detail">
          <h2 className="product-card__detail--name">{product.name}</h2>
          <p className="product-card__detail--specifications">
            {product.specifications}
          </p>
          <p className="product-card__detail--price">{'$' + product.price}</p>
        </div>
      </div>
      {!isInCart(product.id) ? (
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
      ) : (
        <div className="product-card__in-cart">
          <p>PRODUCTO AGREGADO</p>
          <Link to="/carrito" className="btn__end">
            Ver carrito
          </Link>
          <button
            className="btn__end"
            onClick={() => {
              deleteItem(product.id);
            }}
          >
            Eliminar del carrito
          </button>
        </div>
      )}
    </div>
  );
});
