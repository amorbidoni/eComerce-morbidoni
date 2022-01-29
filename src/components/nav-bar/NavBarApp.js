import React from "react";
import CartApp from "../cart/Cart";
import "./NavBar.scss";

const NavBarApp = () => {
  const navBarItems = [
    {
      name: "Inicio",
      link: "",
    },
    {
      name: "Productos",
      link: "",
    },
    {
      name: "Promos",
      link: "",
    },
    {
      name: "Regalería",
      link: "",
    },
  ];
  let itemsNav = navBarItems.map((e) => (
    <li key={e.name} className="nav-bar__item">
      <a href="#" className="nav-btn">
        {e.name}
      </a>
    </li>
  ));
  return (
    <nav className="nav-bar">
      <ul>
        {itemsNav}
        <li>{<CartApp />}</li>
      </ul>
    </nav>
  );
};

export default NavBarApp;
