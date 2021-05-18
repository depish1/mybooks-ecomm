import React from 'react';
import StyledProductSection from './ProductSection.styles';
import ProductHeader from 'components/atoms/ProductHeader/ProductHeader';
import ProductDetails from 'components/atoms/ProductDetails/ProductDetails';
import ProductPhoto from 'components/atoms/ProductPhoto/ProductPhoto';
import ProductBuyBox from 'components/molecules/ProductBuyBox/ProductBuyBox';
import PropTypes from 'prop-types';

const ProductSection = ({ prod_data }) => {
  const { prod_id, prod_author, prod_category, prod_name, prod_year, prod_img_url } = prod_data;
  return (
    <StyledProductSection key={prod_id}>
      <ProductHeader prod_name={prod_name} prod_id={prod_id} />
      <ProductPhoto prod_img_url={prod_img_url}>
        <ProductDetails prod_category={prod_category} prod_author={prod_author} prod_year={prod_year} />
      </ProductPhoto>
      <ProductBuyBox prod_data={prod_data} />
    </StyledProductSection>
  );
};

ProductSection.propTypes = {
  prod_data: PropTypes.shape({
    prod_author: PropTypes.string.isRequired,
    prod_id: PropTypes.string.isRequired,
    prod_img_url: PropTypes.string.isRequired,
    prod_name: PropTypes.string.isRequired,
    prod_price: PropTypes.string.isRequired,
    prod_category: PropTypes.string.isRequired,
    prod_year: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductSection;
