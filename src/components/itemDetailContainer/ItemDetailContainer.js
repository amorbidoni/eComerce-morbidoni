import React, { useEffect, useState } from "react";
import { ItemDetailApp } from "./ItemDetail";

const item = [
  {
    id: "001",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "002",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "003",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "004",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "008",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "005",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "006",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
    price: 100,
    stock: 10,
    image:
      "https://cdn.shopify.com/s/files/1/0425/0642/0390/products/ComiteWines-Foto-_MISEREREOK-IMG_5115.jpg?v=1623091998",
  },
  {
    id: "007",
    name: "Alma Negra",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. Su boca es plena, de taninos muy agradables, y suaves. Tiene un medio de boca consistente, frutal y con algunas notas minerales. De cuerpo elegante y buena estructura, termina con un persistente y largo final de boca.",
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
      resolve(item);
    }, 2000);
    if (error) {
      reject(new error("Error en la promesa"));
    }
  });
};
const ItemDetailContainerApp = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    let requestitem = getProductos();
    requestitem
      .then((res) => {
        setItem(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log("items: ", item);
  return (
    <>
      {loading && <h1>Cargando...</h1>}
      <section className="item-list-container">
        <ItemDetailApp item={item} />
      </section>
    </>
  );
};

export default ItemDetailContainerApp;
