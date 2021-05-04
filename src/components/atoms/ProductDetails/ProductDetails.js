import React from 'react';
import StyledProductDetails from './ProductDetails.styles';

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

export default ProductDetails;
