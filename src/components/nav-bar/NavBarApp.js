import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidgetApp from '../cart/CartWidget';
import img from '../../assets/images';
import './NavBar.scss';

const NavBarApp = () => {
  // set  item active

  const navBarItems = [
    {
      id: 1,
      name: 'Inicio',
      link: '/',
    },
    {
      id: 2,
      name: 'Productos',
      link: '/productos',
    },
  ];

  let itemsNav = navBarItems.map(({ name, id, link }) => (
    <li key={name} className="nav-bar__item">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? 'nav-btn navBar-active' : 'nav-btn'
        }
      >
        {name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="nav-bar">
      <NavLink to={'/'} className="nav-bar__logo">
        <img src={img.logoCavaTransBlanco} />
      </NavLink>
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
