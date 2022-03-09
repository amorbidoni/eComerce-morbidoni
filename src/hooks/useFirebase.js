import { addDoc, collection, getDocs } from 'firebase/firestore';
import db from '../service/firebase';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const useFirebase = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let { categoryId } = useParams();

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

  const getDatabyId = async (idItem) => {
    let data = collection(db, 'wines');
    let col = await getDocs(data);
    let res = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
    res = res.filter((item) => item.id === idItem);

    setProducts(res[0]);
    setLoading(false);
  };

  const generateOrder = async ({ data }) => {
    setLoading(true);

    try {
      const col = collection(db, 'orders');
      const order = await addDoc(col, data);
      setLoading(false);
      alert(order.id);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { products, loading, setLoading, getData, getDatabyId, generateOrder };
};
