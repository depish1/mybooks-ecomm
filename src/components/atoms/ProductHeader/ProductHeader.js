import React from 'react';
import StyledProductHeader from './ProductHeader.styles';

const ProductHeader = ({ prod_name, prod_id }) => {
  return (
    <StyledProductHeader>
      <h3>{prod_name}</h3>
      <p>ID produktu: {prod_id}</p>
    </StyledProductHeader>
  );
};

export default ProductHeader;
