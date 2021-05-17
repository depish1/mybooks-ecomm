import React, { useEffect } from 'react';
import firebase from 'firebase.js';
import { connect } from 'react-redux';
import productsActions from 'redux/products/actions';
import loaderActions from 'redux/loader/actions';
import ProductSection from 'components/molecules/ProductSection/ProductSection';
import StyledProductsList from './ProductsList.styles';

const downloadProducts = async (setLoader) => {
  setLoader(true);
  const results = await firebase.firestore().collection('products').get();
  setLoader(false);
  return results.docs.map((doc) => {
    const prod = { ...doc.data() };
    prod.prod_id = doc.id;
    return prod;
  });
};

const ProductsList = ({ products, setProducts, setLoader }) => {
  useEffect(() => {
    const prodArr = downloadProducts(setLoader);
    prodArr.then((x) => setProducts(x));
  }, []);

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
  setProducts: (products) => dispatch(productsActions.setProducts(products)),
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
