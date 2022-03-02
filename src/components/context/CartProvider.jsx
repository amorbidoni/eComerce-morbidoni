import React, { useContext, useState, createContext } from 'react';

// creo un context
export const CartContext = createContext();
// creamos un hook personalizado que devuelve el hook usecontext con el cartcontext
export const useCartContext = () => {
  return useContext(CartContext);
};
//

// recibo los childrens como props
export const CartProvider = ({ children }) => {
  let quantity = 5;
  const [itemsInCart, setItemsInCart] = useState([]);
  // agregar producos
  const addItem = (item, qty) => {
    setItemsInCart([...itemsInCart, { ...item, qty }]);
  };
  // productos en carrito
  const isInCart = (id) => {
    let found = itemsInCart.some((item) => {
      return item.id === id;
    });
    return found;
  };
  // eliminar productos
  const deleteItem = (id) => {
    if (isInCart(id)) {
      let filterCart = itemsInCart.filter((e) => {
        return e.id !== id;
      });
      setItemsInCart(filterCart);
    }
    return;
  };
  // vaciar carrito

  const deleteAllItemsInCart = () => {
    setItemsInCart([]);
  };
  // sumar cantidades
  const getQuantityItemsInCart = () => {
    const qty = itemsInCart
      .map((e) => e.qty)
      .reduce((prev, curr) => prev + curr, 0);
    return qty;
  };
  //sumar totales

  const getTotalPrice = () => {
    const total = itemsInCart
      .map((e) => e.price * e.qty)
      .reduce((prev, curr) => prev + curr, 0);
    return total;
  };
  // declaro a carritociontext como proveedeor con provider
  return (
    <CartContext.Provider
      value={{
        quantity,
        addItem,
        itemsInCart,
        isInCart,
        deleteItem,
        deleteAllItemsInCart,
        getQuantityItemsInCart,
        getTotalPrice,
      }}
    >
      {/* declaro a quien voy a enviar la informacion con childrens */}
      {children}
    </CartContext.Provider>
  );
};
