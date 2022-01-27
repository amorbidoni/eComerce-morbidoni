import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ProductApp from "./products/Product";

import NavBarApp from "./shared/nav-bar/NavBarApp";

ReactDOM.render(
  <>
    <NavBarApp />
    <ProductApp value={1} />
  </>,
  document.getElementById("root")
);
