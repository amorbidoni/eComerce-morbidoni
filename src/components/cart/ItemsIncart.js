import React, { memo } from 'react';

import './cart.scss';

export const ItemsInCart = memo(({ product }) => {
  return (
    <div className="product-card">
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
    </div>
  );
});
