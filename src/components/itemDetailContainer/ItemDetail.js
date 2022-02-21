import React from "react";
import img from "../../assets/images";
import "./itemDetail.scss";
export const ItemDetailApp = ({ item }) => {
  return (
    <div className="product-detail">
      <div
        className={
          item.name === undefined
            ? "product-detail__left-box"
            : "product-detail__left-box left-box-animation "
        }
      >
        <img src={img.logoCavaTransBlanco} alt="inicio" />
      </div>
      <img className="product-detail__image" src={item.image} alt={item.name} />
      <div
        className={
          item.name === undefined
            ? "product-detail__detail"
            : "product-detail__detail detail-animation"
        }
      >
        <h2 className={item.name === undefined ? "" : "detail-text-animation"}>
          {item.name}
        </h2>
        <p className={item.name === undefined ? "" : "detail-text-animation "}>
          {item.detail}
        </p>
        <p className={item.name === undefined ? "" : "detail-text-animation "}>
          {item.price === undefined ? "" : "$" + item.price}
        </p>
      </div>
    </div>
  );
};
