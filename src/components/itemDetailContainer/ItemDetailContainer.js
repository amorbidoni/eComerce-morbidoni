import React, { useEffect, useState } from 'react';
import { ItemDetailApp } from './ItemDetail';
import img from '../../assets/images';
import { useParams } from 'react-router-dom';
import { LoaderApp } from '../loader/Loader';

const item = [
  {
    id: '001',
    name: 'Alma Negra',
    tpye: 'tinto',
    specifications: 'Tinto',
    detail:
      'Color rojo rubí profundo. En nariz, es muy expresivo e intenso. Las frutillas, cerezas y membrillos son los aromas frutales que más se destacan, fundiéndose con notas de vainilla, madera tostada y sutiles notas a especias. En boca es pleno, de taninos muy agradables, y suaves.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.almaNegraTrans,
  },
  {
    id: '002',
    name: 'Andillian',
    tpye: 'tinto',
    specifications: 'Cabernet Franc',
    detail:
      'Cabernet Franc. Viñedos Ubicados en Alto Agrelo, Luján de Cuyo, Mendoza. Vinificación, raleo y selección de racimos en finca luego de elegir las mejores hileras del viñedo. Cosecha manual en cajas de 15 kg. Maceración carbónica pre fermentativa durante 5 días. Fermentación durante12 días de trabajos suaves de pisoneo y remontajes. Maceración.',
    detailList: [],
    price: 1530,
    stock: 10,
    image: img.andillianCF,
  },
  {
    id: '003',
    name: 'Animal',
    tpye: 'tinto',
    specifications: 'Tinto',
    detail:
      'Color casi negro, con destellos violáceos, muy intenso. Notas de frutas negras y mermelada de ciruela. Ataque dulce, delicado y carnoso, con taninos amables que invitan a seguir tomando, mucha fruta presente en boca con una madera bien amalgamada, donde se reflejan las notas de vainilla y chocolate.',
    detailList: [],
    price: 900,
    stock: 10,
    image: img.animalTrans,
  },
  {
    id: '004',
    name: 'Antigal Uno',
    tpye: 'tinto',
    specifications: 'Cabernet Sauvignon',
    detail:
      'La cosecha 2017 de Antigal UNO Malbec ofrece deliciosos sabores de ciruela, fresa y mora con notas de violeta, vainilla y chocolate con leche. De refrescante acidez natural cuidadosamente protegida, este vino de color rojo violáceo intenso es sorprendentemente versátil en la mesa y se combina bien con cordero, pato, carne vacuna, así como con la pasta y el risotto.',
    detailList: [],
    price: 1200,
    stock: 10,
    image: img.antigalUnoCS,
  },
  {
    id: '005',
    name: 'Bendito Pecado',
    tpye: 'tinto',
    specifications: 'Cabernet Sauvignon',
    detail: '',
    detailList: [],
    price: 800,
    stock: 10,
    image: img.benditoPecadoCF,
  },
  {
    id: '006',
    name: 'Bendito Pecado',
    tpye: 'tinto',
    specifications: 'Malbec',
    detail:
      'Variedad: 100%Malbec.Viñedos: Vista Flores, Valle de Uco, Mendoza. 1.050 msnm.Plantacion: Espalderos de alta densidad. 6.850 plantas por hectarea. Rendimiento 2 botellas porplanta. 30% paso por madera. 70% solo fruta. +Notas de Cata: Intenso color rojo purpura. Especiado con reminiscencias de cerezas y unsutil toque de roble.  Joven y frutado con una acidez bien balanceada. Ideal para acompañar con carnes blancas, carnes rojas y comidas con salsas cremosas y lacteas. Sugerimos servir entre 14ºC–16ºC',
    detailList: [],
    price: 800,
    stock: 10,
    image: img.benditoPecadoMalbec,
  },
  {
    id: '007',
    name: 'Biribiri Reserva',
    tpye: 'tinto',
    specifications: 'Malbec',
    detail: '',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.biribiriReservaTrans,
  },
  {
    id: '008',
    name: 'Capítulo Siete',
    tpye: 'blancos-y-rosados',
    specifications: 'Blend de blancas',
    detail: '',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.capituloSiete,
  },
  {
    id: '009',
    name: 'ZunZun',
    tpye: 'blancos-y-rosados',
    specifications: 'Naranjo',
    detail:
      'Zunzun Naranjo, es 100% Sauvignon Blanc. Se trabaja con levaduras indígenas, su particularidad es que se elabora  con piel como un vino tinto buscando extraer taninos que luego ayudarán en el posterior añejado. Su  crianza es de 3 meses en contacto con piel en huevo de cemento. De color sutil amarillo ámbar brillante, en nariz encontramos notas de hierbas, frutos secos recordando a la almendra y panificados. En boca se presenta untuoso, con acidez equilibrada, fresca y envolvente.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.zunzunNaranjo,
  },
  {
    id: '010',
    name: 'ZunZun',
    tpye: 'blancos-y-rosados',
    specifications: 'Rosado',
    detail:
      'Zunzun Rosado, es 100% Sauvignon Blanc. Se trabaja con levaduras indígenas, su particularidad es que se elabora  con piel como un vino tinto buscando extraer taninos que luego ayudarán en el posterior añejado. Su  crianza es de 3 meses en contacto con piel en huevo de cemento. De color sutil amarillo ámbar brillante, en nariz encontramos notas de hierbas, frutos secos recordando a la almendra y panificados. En boca se presenta untuoso, con acidez equilibrada, fresca y envolvente.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.zunzunRosado,
  },
  {
    id: '011',
    name: 'Las Perdices',
    tpye: 'blancos-y-rosados',
    specifications: 'Fume Blanc',
    detail:
      'Color amarillo intenso con matices verdosos. Aromas cítricos y sutiles notas de tostado y vainilla. En boca aparecen las notas de maracuyá, pomelo rosado y espárrago, acompañado de los aportes de la barrica. Buena acidez y final de boca.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.lasPerdicesFumeBlanc,
  },
  {
    id: '013',
    name: 'Vinyes',
    tpye: 'tinto',
    specifications: 'Malbec Cot',
    detail:
      '“Malbec Cot” elaborado a partir de una maceración carbónica estricta con racimos enteros. La maceración carbónica también tiene un origen tradicional en Francia, donde históricamente también se realizaba la maceración carbónica para la elaboración de vinos tintos. Hoy en día, la máxima expresión de estos vinos en Francia se da en los de Beaujolais, producidos con la variedad Gamay. Los vinos obtenidos por maceración carbónica tienen unas características particulares. Este tipo de elaboración da unos vinos con menos cuerpo, más ligeros, menos ácidos y con menos azúcar.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.vinyesCot,
  },
  {
    id: '014',
    name: 'El Gaucho',
    tpye: 'tinto',
    specifications: 'Malbec',
    detail:
      'Color rojo con ribetes violáceos, de aroma intenso. Muy agradable al paladar donde se mezclan frutos rojos como los arándanos y cerezas con especias tales como el tabaco y chocolate. Redondo en boca y final agrabable. Cafayate.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.elGauchoTrans,
  },
  {
    id: '015',
    name: 'Herencia',
    tpye: 'blancos-y-rosados',
    specifications: 'Chardonnay',
    detail:
      'Color rojo profundo, con destellos violáceos. En nariz presenta marcadas notas de frutos negros como ciruelas y cassis. La entrada en boca es sedosa, de buena estructura y sabores especiados que otorgan buena complejidad.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.herenciaChardonnay,
  },
  {
    id: '016',
    name: 'Hey Rosé',
    tpye: 'blancos-y-rosados',
    specifications: 'Rosado',
    detail:
      'De hermoso color rosado salmón. En nariz presenta aromas a flores blancas y cítricos. Un vino fresco y elegante, perfecto para un atardecer de verano.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.heyRose,
  },
  {
    id: '017',
    name: 'La Posta Paulucci',
    tpye: 'tinto',
    specifications: 'Malbec',
    detail:
      'Color rojo con aromas de cerezas, frambuesas y violetas junto con notas de roble tostado. En el paladar, los sabores de bayas frescas se mezclan con notas especiadas, hay un toque de caramelo suave en el acabado. Se trata de un vino cremoso, de cuerpo medio y bien estructurado.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.laPostaPaulucciTrans,
  },
  {
    id: '019',
    name: 'La Posta',
    tpye: 'blancos-y-rosados',
    specifications: 'Pinot Noir',
    detail:
      'Pinot Noir que puede guardase 10 años sin problemas, conservar en un espacio fresco, sin luz y sin vibraciones, ideal para servir entre los 16 y 18 grados, Complementa muy bien los alimentos tradicionales Pinot-amigables como el cordero y salmón a la parrilla.',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.laPostaPinotTrans,
  },
  {
    id: '020',
    name: 'Las Perdices Sweety',
    tpye: 'espumantes',
    specifications: 'Espumante dulce',
    detail: '',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.lasPerdicesSweety,
  },
  {
    id: '021',
    name: 'Las Perdices Brut Rose',
    tpye: 'espumantes',
    specifications: 'Espumante Rose',
    detail: '',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.lasPerdicesBrutRose,
  },
  {
    id: '022',
    name: 'Jameson',
    tpye: 'destilados',
    specifications: 'Irish Whisky',
    detail: '',
    detailList: [],
    price: 3000,
    stock: 10,
    image: img.jameson,
  },
  {
    id: '023',
    name: 'Baileys',
    tpye: 'destilados',
    specifications: 'Licor de crema',
    detail: '',
    detailList: [],
    price: 100,
    stock: 10,
    image: img.baileys,
  },
  {
    id: '024',
    name: 'Bulldog',
    tpye: 'destilados',
    specifications: 'Gin',
    detail: '',
    detailList: [],
    price: 4000,
    stock: 10,
    image: img.bulldog,
  },
  {
    id: '025',
    name: 'Jim Beam Honney',
    tpye: 'destilados',
    specifications: 'Whisky Honey',
    detail: '',
    detailList: [],
    price: 4000,
    stock: 10,
    image: img.jimBeamHoney,
  },
];
const getProductos = () => {
  let error = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, 2000);
    if (error) {
      reject(new error('Error en la promesa'));
    }
  });
};
const ItemDetailContainerApp = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    let requestitem = getProductos();
    requestitem
      .then((res) => {
        res = res.filter((e) => e.id === id);
        setItem(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {loading && <LoaderApp />}
      <section className="item-list-container">
        <ItemDetailApp item={item} />
      </section>
    </>
  );
};

export default ItemDetailContainerApp;
