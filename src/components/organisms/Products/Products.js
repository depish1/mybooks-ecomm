import React from 'react';
import StyledProducts from './Products.styles';
import ProductsList from 'components/organisms/ProductsList/ProductsList';

const Products = () => {
  return (
    <StyledProducts>
      <ProductsList />
    </StyledProducts>
  );
};

export default Products;
