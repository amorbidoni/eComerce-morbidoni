import React from 'react';
import { useCartContext } from '../context/CartProvider';

import { ItemsInCart } from './ItemsIncart';

export const CartApp = () => {
  const { itemsInCart } = useCartContext();
  return (
    <div>
      {itemsInCart.map((p) => (
        <ItemsInCart product={p} key={p.id} />
      ))}
    </div>
  );
};
