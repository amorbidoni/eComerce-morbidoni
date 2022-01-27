import React from "react";
import CartApp from "../components/cart/Cart";
import "./NavBar.css";

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
      <a href="#">{e.name}</a>
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
