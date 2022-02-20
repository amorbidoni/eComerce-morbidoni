import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

import img from "../../assets/images";
import { useParams } from "react-router-dom";
import NavBarCategoriesApp from "../nav-bar-categories/NavBarCategories";

const products = [
  {
    id: "001",
    name: "Alma Negra",
    tpye: "tinto",
    specifications: "Tinto",
    detail:
      "Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. En boca es pleno, de taninos muy agradables, y suaves.",
    price: 100,
    stock: 10,
    image: img.almaNegraTrans,
  },
  {
    id: "002",
    name: "Andillian",
    tpye: "tinto",
    specifications: "Cabernet Franc",
    detail: "",
    price: 1530,
    stock: 10,
    image: img.andillianCF,
  },
  {
    id: "003",
    name: "Animal",
    tpye: "tinto",
    specifications: "Tinto",
    detail: "",
    price: 900,
    stock: 10,
    image: img.animalTrans,
  },
  {
    id: "004",
    name: "Antigal Uno",
    tpye: "tinto",
    specifications: "Cabernet Sauvignon",
    detail: "",
    price: 1200,
    stock: 10,
    image: img.antigalUnoCS,
  },
  {
    id: "005",
    name: "Bendito Pecado",
    tpye: "tinto",
    specifications: "Cabernet Sauvignon",
    detail: "",
    price: 800,
    stock: 10,
    image: img.benditoPecadoCF,
  },
  {
    id: "006",
    name: "Bendito Pecado",
    tpye: "tinto",
    specifications: "Malbec",
    detail: "",
    price: 800,
    stock: 10,
    image: img.benditoPecadoMalbec,
  },
  {
    id: "007",
    name: "Biribiri Reserva",
    tpye: "tinto",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.biribiriReservaTrans,
  },
  {
    id: "008",
    name: "Capítulo Siete",
    tpye: "blancos-y-rosados",
    specifications: "Blend de blancas",
    detail: "",
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
  {
    id: "009",
    name: "Capítulo Siete",
    tpye: "blancos-y-rosados",
    specifications: "Blend de blancas",
    detail: "",
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
  {
    id: "010",
    name: "Capítulo Siete",
    tpye: "blancos-y-rosados",
    specifications: "Blend de blancas",
    detail: "",
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
  {
    id: "011",
    name: "Capítulo Siete",
    tpye: "blancos-y-rosados",
    specifications: "Blend de blancas",
    detail: "",
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
  {
    id: "013",
    name: "Contra Viento",
    tpye: "tinto",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.contraVientoTrans,
  },
  {
    id: "014",
    name: "El Gaucho",
    tpye: "tinto",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.elGauchoTrans,
  },
  {
    id: "015",
    name: "Herencia",
    tpye: "blancos-y-rosados",
    specifications: "Chardonnay",
    detail: "",
    price: 100,
    stock: 10,
    image: img.herenciaChardonnay,
  },
  {
    id: "016",
    name: "Hey Rosé",
    tpye: "blancos-y-rosados",
    specifications: "Rosado",
    detail: "",
    price: 100,
    stock: 10,
    image: img.heyRose,
  },
  {
    id: "017",
    name: "La Posta Paulucci",
    tpye: "tinto",
    specifications: "Malbec",
    detail: "",
    price: 100,
    stock: 10,
    image: img.laPostaPaulucciTrans,
  },
  {
    id: "019",
    name: "La Posta",
    tpye: "blancos-y-rosados",
    specifications: "Pinot Noir",
    detail: "",
    price: 100,
    stock: 10,
    image: img.laPostaPinotTrans,
  },
];

const getProductos = (category) => {
  console.log(category);
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (category === undefined) {
        resolve(products);
      } else {
        let filtro = products.filter((e) => e.tpye === category);
        resolve(filtro);
      }
    }, 2000);
    if (error) {
      reject(new error("Error en la promesa"));
    }
  });
};
const ItemListContainerApp = () => {
  let { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let requestProducts = getProductos(categoryId);
    requestProducts
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [categoryId]);
  console.log(products);
  return (
    <>
      <NavBarCategoriesApp />
      {loading && <h1>Cargando...</h1>}
      <section className="item-list-container">
        <ItemList products={products} />
      </section>
    </>
  );
};

export default ItemListContainerApp;
