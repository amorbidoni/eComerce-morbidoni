import React, { useState } from "react";

import CartWidgetApp from "../cart/CartWidget";
import "./NavBar.scss";

const NavBarApp = () => {
  // set  item active
  const [active, setActive] = useState(1);

  const navBarItems = [
    {
      id: 1,
      name: "Inicio",
      link: "",
    },
    {
      id: 2,
      name: "Productos",
      link: "",
    },
    {
      id: 3,
      name: "Promos",
      link: "",
    },
    {
      id: 4,
      name: "Regalería",
      link: "",
    },
  ];
  const setItemActive = (id, link) => {
    setActive(id);
  };
  let itemsNav = navBarItems.map(({ name, id, link }) => (
    <li key={name} className="nav-bar__item">
      <a
        href="#"
        className={id === active ? "nav-btn active-item" : "nav-btn"}
        onClick={() => {
          setItemActive(id, link);
        }}
      >
        {name}
      </a>
    </li>
  ));

  return (
    <nav className="nav-bar">
      <ul>
        {itemsNav}
        <li>
          <CartWidgetApp />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarApp;
