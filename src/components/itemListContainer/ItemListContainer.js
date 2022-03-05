import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { collection, getDocs } from 'firebase/firestore';
import img from '../../assets/images';
import { useParams } from 'react-router-dom';
import NavBarCategoriesApp from '../nav-bar-categories/NavBarCategories';
import { LoaderApp } from '../loader/Loader';
import db from '../../service/firebase';

const ItemListContainerApp = () => {
  let { categoryId } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const data = collection(db, 'wines');
    const col = await getDocs(data);
    const res = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
    console.log(res);
    setProducts(res);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, []);

  return (
    <>
      <NavBarCategoriesApp />
      {loading ? (
        <LoaderApp />
      ) : (
        <section className="item-list-container">
          <ItemList products={products} />
        </section>
      )}
    </>
  );
};

export default ItemListContainerApp;
