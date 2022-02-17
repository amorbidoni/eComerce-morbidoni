import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidgetApp from "../cart/CartWidget";
import "./NavBar.scss";

const NavBarApp = () => {
  // set  item active
  const [active, setActive] = useState(1);

  const navBarItems = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
    },
    {
      id: 2,
      name: "Productos",
      link: "/productos",
    },
    {
      id: 3,
      name: "Promos",
      link: "/promos",
    },
    {
      id: 4,
      name: "Regalería",
      link: "/regaleria",
    },
  ];
  const setItemActive = (id, link) => {
    setActive(id);
  };
  let itemsNav = navBarItems.map(({ name, id, link }) => (
    <li key={name} className="nav-bar__item">
      <NavLink
        to={link}
        className="nav-btn"
        onClick={() => {
          setItemActive(id, link);
        }}
      >
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="nav-bar">
      <ul>
        {itemsNav}
        <li>
          <CartWidgetApp counterIndication={false} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarApp;
