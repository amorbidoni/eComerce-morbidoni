import React from "react";

import "./itemDetail.scss";
export const ItemDetailApp = ({ item }) => {
  return (
    <div className="product-detail">
      <img className="product-detail__image" src={item.image} alt={item.name} />
      <div className="product-detail__detail">
        <h2>{item.name}</h2>
        <p>{item.detail}</p>
        <p>{"$" + item.price}</p>
      </div>
    </div>
  );
};
