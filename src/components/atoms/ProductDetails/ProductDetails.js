import React from 'react';
import StyledProductDetails from './ProductDetails.styles';
import PropTypes from 'prop-types';

const ProductDetails = ({ prod_category, prod_author, prod_year }) => {
  return (
    <StyledProductDetails>
      <p>
        <span className="key">Kategoria: </span>
        {prod_category}
      </p>

      <p>
        <span className="key">Autor: </span>
        {prod_author}
      </p>

      <p>
        <span className="key">Rok wydania: </span>
        {prod_year}
      </p>
    </StyledProductDetails>
  );
};

ProductDetails.propTypes = {
  prod_category: PropTypes.string.isRequired,
  prod_author: PropTypes.string.isRequired,
  prod_year: PropTypes.string.isRequired,
};

export default ProductDetails;
