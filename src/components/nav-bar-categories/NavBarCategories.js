import React from "react";
import { NavLink } from "react-router-dom";
import "./navBarCategories.scss";
const NavBarCategoriesApp = () => {
  // set  item active

  const navBarItemsCategories = [
    {
      name: "Tintos",
      category: "tinto",
    },
    {
      name: "Blancos y Rosados",
      category: "blancos-y-rosados",
    },
    {
      name: "Espumantes",
      category: "espumantes",
    },
    {
      name: "Aperitivos",
      category: "aperitivos",
    },
  ];

  let itemsNav = navBarItemsCategories.map(({ category, name }) => (
    <div key={category} className="nav-bar-categories__item">
      <NavLink
        to={`/productos/${category}`}
        className={({ isActive }) =>
          isActive
            ? "nav-bar-categories__link navBarCategories-active"
            : "nav-bar-categories__link"
        }
      >
        {name}
      </NavLink>
    </div>
  ));

  return <nav className="nav-bar-categories">{itemsNav}</nav>;
};

export default NavBarCategoriesApp;

// import React from "react";
// import { Link } from "react-router-dom";
// export const NavBarCategoriesApp = () => {
//   const categoriesList = [
//     {
//       category: "tinto",
//       link: `/productos/tinto`,
//     },
//     {
//       category: "blancosYRosados",
//       link: `/productos`,
//     },
//     {
//       category: "espumantes",
//       link: `/productos`,
//     },
//     {
//       category: "aperitivos",
//       link: `/productos`,
//     },
//   ];
//   let itemsNavCategories = categoriesList.map(
//     ({ category, link }) => console.log(link)
//     // <div key={category}>
//     //   <Link to={link} className="categories__tiem">
//     //     {category}
//     //   </Link>
//     // </div>
//   );
//   return (
//     <nav className="categories">
//       categories
//       {/* {itemsNavCategories} */}
//       <Link to={"/productos/tinto"}>tinto</Link>
//     </nav>
//   );
// };
