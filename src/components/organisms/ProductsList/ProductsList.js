import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'utils/firebase.js';
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

const ProductsList = ({ productsList, setProducts, setLoader }) => {
  useEffect(() => {
    const prodArr = downloadProducts(setLoader);
    prodArr.then((x) => setProducts(x));
  }, [setProducts, setLoader]);

  return (
    <StyledProductsList>
      {productsList?.map((prod) => (
        <ProductSection key={prod.prod_id} prod_data={prod} />
      ))}
    </StyledProductsList>
  );
};

const mapStateToProps = (state) => ({
  productsList: state.products.list,
});

const mapDispatchToProps = (dispatch) => ({
  setProducts: (products) => dispatch(productsActions.setProducts(products)),
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

ProductsList.propTypes = {
  setLoader: PropTypes.func.isRequired,
  setProducts: PropTypes.func.isRequired,
  basketList: PropTypes.arrayOf(
    PropTypes.shape({
      prod_author: PropTypes.string.isRequired,
      prod_category: PropTypes.string.isRequired,
      prod_id: PropTypes.string.isRequired,
      prod_img_url: PropTypes.string.isRequired,
      prod_name: PropTypes.string.isRequired,
      prod_price: PropTypes.string.isRequired,
      prod_year: PropTypes.string.isRequired,
    })
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
