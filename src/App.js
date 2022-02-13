import React from "react";

import NavBarApp from "./components/nav-bar/NavBarApp";
import ItemListContainerApp from "./components/itemListContainer/ItemListContainer";
import ItemCount from "./components/item-count/ItemCount";

const App = () => {
  return (
    <main>
      <NavBarApp />
      <ItemListContainerApp title="item list container" />
    </main>
  );
};

export default App;
