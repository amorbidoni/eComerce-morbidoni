import React from "react";
import ItemCount from "../item-count/ItemCount";
import "./item.scss";
export const Item = ({ product }) => {
  return (
    <div className="product-card">
      <img
        className="product-card__image"
        src={product.image}
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <p>{"$" + product.price}</p>
      <ItemCount stock={product.stock} initial={0} />
    </div>
  );
};
