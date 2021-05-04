import React from 'react';
import StyledProductSection from './ProductSection.styles';
import ProductHeader from 'components/atoms/ProductHeader/ProductHeader';
import ProductDetails from 'components/atoms/ProductDetails/ProductDetails';
import ProductPhoto from 'components/atoms/ProductPhoto/ProductPhoto';
import ProductBuyBox from 'components/molecules/ProductBuyBox/ProductBuyBox';

const ProductSection = ({ prod_id, prod_author, prod_category, prod_name, prod_price, prod_year, prod_img_url }) => {
  return (
    <StyledProductSection key={prod_id}>
      <ProductHeader prod_name={prod_name} prod_id={prod_id} />
      <ProductPhoto prod_img_url={prod_img_url}>
        <ProductDetails prod_category={prod_category} prod_author={prod_author} prod_year={prod_year} />
      </ProductPhoto>
      <ProductBuyBox prod_id={prod_id} prod_price={prod_price} />
    </StyledProductSection>
  );
};

export default ProductSection;
