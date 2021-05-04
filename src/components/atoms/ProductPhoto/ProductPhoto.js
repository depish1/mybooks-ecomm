import StyledProductPhoto from './ProductPhoto.styles';

const ProductPhoto = ({ prod_img_url }) => {
  return (
    <StyledProductPhoto>
      <img src={prod_img_url} alt="Product" />
    </StyledProductPhoto>
  );
};

export default ProductPhoto;
