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
    if (categoryId === undefined) {
      setProducts(res);
    } else if (categoryId) {
      let resFiltered = res.filter((e) => e.category === categoryId);
      setProducts(resFiltered);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [categoryId]);

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
