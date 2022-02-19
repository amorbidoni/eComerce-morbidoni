import React from "react";
import { Item } from "./Item";
import "./itemList.scss";

export const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((p) => (
        <Item product={p} key={p.id} />
      ))}
    </div>
  );
};
