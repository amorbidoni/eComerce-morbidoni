import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemDetailContainerApp from '../components/itemDetailContainer/ItemDetailContainer';
import ItemListContainerApp from '../components/itemListContainer/ItemListContainer';

import NavBarApp from '../components/nav-bar/NavBarApp';

import { IndexApp } from '../components/Index';
import { CartApp } from '../components/cart/Cart';

export const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element={<IndexApp />} />
        <Route
          path="/productos"
          element={
            <ItemListContainerApp
              greeting="Lsitado por categoría"
              categories={true}
            />
          }
        />
        <Route
          path="/productos/:categoryId"
          element={<ItemListContainerApp categories={true} />}
        />
        {/* <Route path="/cart" element={<CartWidgetApp />} /> */}
        <Route path="/item-detail/:id" element={<ItemDetailContainerApp />} />
        <Route path="/itemDetail" element={<ItemDetailContainerApp />} />
        {/* <Route path="/prueba" element={<Prueba />} /> */}

        <Route path="/carrito" element={<CartApp />} />
      </Routes>
    </BrowserRouter>
  );
};
