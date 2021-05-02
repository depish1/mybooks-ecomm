import React, { useState, useEffect } from 'react';
import firebase from 'assets/firebase';

const getProducts = async () => {
  const results = await firebase.firestore().collection('products').get();

  return results.docs.map((doc) => {
    const prod = { ...doc.data() };
    prod.id = doc.id;
    return prod;
  });
};

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  console.log('products', '=>', products);

  useEffect(() => {
    const prodArr = getProducts();
    prodArr.then((x) => setProducts(x));
  }, []);

  return <></>;
};

export default ProductsList;
