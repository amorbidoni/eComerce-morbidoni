import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidgetApp from "../components/cart/CartWidget";
import { ItemDetailApp } from "../components/itemDetailContainer/ItemDetail";
import ItemDetailContainerApp from "../components/itemDetailContainer/ItemDetailContainer";
import ItemListContainerApp from "../components/itemListContainer/ItemListContainer";
import NavBarCategoriesApp from "../components/nav-bar-categories/NavBarCategories";

import NavBarApp from "../components/nav-bar/NavBarApp";
import { Prueba } from "../components/prueba/Prueba";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<ItemListContainerApp greeting="Vinos" />} />
        <Route
          path="/productos"
          element={<ItemListContainerApp greeting="Lsitado por categoría" />}
        />
        <Route
          path="/productos/:categoryId"
          element={<ItemListContainerApp />}
        />
        {/* <Route path="/cart" element={<CartWidgetApp />} /> */}
        <Route path="/item-detail/:id" element={<ItemDetailContainerApp />} />
        <Route path="/itemDetail" element={<ItemDetailContainerApp />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
};
