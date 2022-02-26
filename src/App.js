import React from 'react';
import { CartProvider } from './components/context/CartProvider';

import { Rutas } from './routes';
const App = () => {
  return (
    <main>
      <CartProvider>
        <Rutas />
      </CartProvider>
    </main>
  );
};

export default App;
