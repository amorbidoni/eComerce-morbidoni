import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import ProductApp from "./components/products/Product";
import NavBarApp from "./components/nav-bar/NavBarApp";
import ItemListContainerApp from "./components/itemListContainer/ItemListContainer";

ReactDOM.render(
  <>
    <NavBarApp />
    <ItemListContainerApp />
  </>,
  document.getElementById("root")
);
