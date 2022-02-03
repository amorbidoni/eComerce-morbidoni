import React from "react";

import NavBarApp from "./components/nav-bar/NavBarApp";
import ItemListContainerApp from "./components/itemListContainer/ItemListContainer";
const App = () => {
  return (
    <main>
      <NavBarApp />
      <ItemListContainerApp title="item list container" />
    </main>
  );
};

export default App;
