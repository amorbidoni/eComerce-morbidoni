import React from 'react';
import { createContext } from 'react';

// creo un context
const CarritoContext = createContext();
// recibo los childrens como props
export const CartProvider = ({ children }) => {
  let nombre = 'Andres';

  // declaro a carritociontext como proveedeor con provider
  return (
    <CarritoContext.Provider value={{ nombre }}>
      {/* declaro a quien voy a enviar la informacion con childrens */}
      {children}
    </CarritoContext.Provider>
  );
};
