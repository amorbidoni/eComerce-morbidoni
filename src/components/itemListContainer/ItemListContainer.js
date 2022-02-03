import React, { useEffect, useState } from "react";
import ProductApp from "../products/Product";

const ItemListContainerApp = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ProductApp value={0} />
    </>
  );
};

export default ItemListContainerApp;
