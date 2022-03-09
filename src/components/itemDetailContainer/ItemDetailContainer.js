import React, { useEffect } from 'react';
import { ItemDetailApp } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { LoaderApp } from '../loader/Loader';
import { useFirebase } from '../../hooks/useFirebase';

const ItemDetailContainerApp = () => {
  const { id } = useParams();

  const { products, loading, setLoading, getDatabyId } = useFirebase();
  useEffect(() => {
    setLoading(true);
    getDatabyId(id);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderApp />
      ) : (
        <section className="item-list-container">
          <ItemDetailApp item={products} />
        </section>
      )}
    </>
  );
};

export default ItemDetailContainerApp;
