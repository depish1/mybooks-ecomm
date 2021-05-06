import React, { useEffect } from 'react';
import firebase from 'firebase.js';
import { connect } from 'react-redux';
import actions from 'redux/products/actions';
import ProductSection from 'components/molecules/ProductSection/ProductSection';
import StyledProductsList from './ProductsList.styles';

const downloadProducts = async () => {
  const results = await firebase.firestore().collection('products').get();
  return results.docs.map((doc) => {
    const prod = { ...doc.data() };
    prod.prod_id = doc.id;
    return prod;
  });
};

const ProductsList = ({ products, setProducts }) => {
  useEffect(() => {
    const prodArr = downloadProducts();
    prodArr.then((x) => setProducts(x));
  }, [setProducts]);
  window.uniqueArray = (a) => [...new Set(a.map((o) => JSON.stringify(o)))].map((s) => JSON.parse(s));

  return (
    <StyledProductsList>
      {products.list?.map((prod) => (
        <ProductSection key={prod.prod_id} prod_data={prod} />
      ))}
    </StyledProductsList>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(actions.setProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
