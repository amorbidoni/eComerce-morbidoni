import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import ProductApp from "./components/products/Product";
import NavBarApp from "./components/nav-bar/NavBarApp";

ReactDOM.render(
  <>
    <NavBarApp />
    <ProductApp value={1} />
  </>,
  document.getElementById("root")
);
