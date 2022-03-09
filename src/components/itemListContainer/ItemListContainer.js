import React, { useEffect } from 'react';
import { ItemList } from './ItemList';
import { useFirebase } from '../../hooks/useFirebase';

import { useParams } from 'react-router-dom';
import NavBarCategoriesApp from '../nav-bar-categories/NavBarCategories';
import { LoaderApp } from '../loader/Loader';

const ItemListContainerApp = () => {
  let { categoryId } = useParams();
  const { products, loading, setLoading, getData } = useFirebase();
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
