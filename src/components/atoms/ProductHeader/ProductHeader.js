import React from 'react';
import StyledProductHeader from './ProductHeader.styles';
import PropTypes from 'prop-types';

const ProductHeader = ({ prod_name, prod_id }) => {
  return (
    <StyledProductHeader>
      <h3>{prod_name}</h3>
      <p>ID produktu: {prod_id}</p>
    </StyledProductHeader>
  );
};

ProductHeader.propTypes = {
  prod_name: PropTypes.string.isRequired,
  prod_id: PropTypes.string.isRequired,
};

export default ProductHeader;
