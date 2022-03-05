import { useState } from 'react';

export const useFirebase = () => {
  const getData = async () => {
    const data = collection(db, 'wines');
    const col = await getDocs(data);
    const res = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
    console.log(res);
    setProducts(res);
    setLoading(false);
  };
  return { getData };
};
