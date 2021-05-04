import React, { useEffect } from 'react';
import firebase from 'assets/firebase';
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
  console.log('products', '=>', setProducts);

  useEffect(() => {
    const prodArr = downloadProducts();
    prodArr.then((x) => setProducts(x));
  }, [setProducts]);

  return (
    <StyledProductsList>
      {products.list?.map(({ prod_id, prod_author, prod_category, prod_name, prod_price, prod_year, prod_img_url }) => (
        <ProductSection
          key={prod_id}
          prod_id={prod_id}
          prod_category={prod_category}
          prod_name={prod_name}
          prod_price={prod_price}
          prod_author={prod_author}
          prod_year={prod_year}
          prod_img_url={prod_img_url}
        />
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
