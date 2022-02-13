import React, { useEffect, useState } from "react";
import { ItemList } from "../itemList/ItemList";
import ProductApp from "../products/Product";

const products = [
  {
    id: "001",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "002",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "003",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "004",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "008",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "005",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "006",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "007",
    name: "Alma Negra",
    specifications: "Tinto",
    detail: "",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
];
const getProductos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
    if (error) {
      reject(new error("Error en la promesa"));
    }
  });
};
const ItemListContainerApp = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let requestProducts = getProductos();
    requestProducts
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(products);
  return (
    <>
      {loading && <h1>Cargando...</h1>}
      <section className="item-list-container">
        <ItemList products={products} />
      </section>
    </>
  );
};

export default ItemListContainerApp;
