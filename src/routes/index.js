import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidgetApp from "../components/cart/CartWidget";
import { ItemDetailApp } from "../components/itemDetail/ItemDetail";
import ItemDetailContainerApp from "../components/itemDetailContainer/ItemDetailContainer";
import ItemListContainerApp from "../components/itemListContainer/ItemListContainer";
import NavBarApp from "../components/nav-bar/NavBarApp";
import { Prueba } from "../components/prueba/Prueba";

export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/productos" element={<ItemListContainerApp />} />
        <Route path="/" element={<ItemListContainerApp />} />
        <Route path="/cart" element={<CartWidgetApp />} />
        <Route path="/item-detail/:id" element={<ItemDetailApp />} />
        <Route path="/prueba" element={<Prueba />} />
        <Route path="/itemDetail" element={<ItemDetailContainerApp />} />
      </Routes>
    </BrowserRouter>
  );
};
