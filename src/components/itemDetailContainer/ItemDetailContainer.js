import React, { useEffect, useState } from 'react';
import { ItemDetailApp } from './ItemDetail';
import img from '../../assets/images';
import { useParams } from 'react-router-dom';
import { LoaderApp } from '../loader/Loader';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../service/firebase';

const ItemDetailContainerApp = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  //
  const getDatabyId = async (idItem) => {
    let data = collection(db, 'wines');
    let col = await getDocs(data);
    let res = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
    res = res.filter((item) => item.id === idItem);
    console.log(res);
    setItem(res[0]);
    setLoading(false);
  };
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
          <ItemDetailApp item={item} />
        </section>
      )}
    </>
  );
};

export default ItemDetailContainerApp;
