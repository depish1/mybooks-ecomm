import StyledProductPhoto from './ProductPhoto.styles';
import PropTypes from 'prop-types';

const ProductPhoto = ({ prod_img_url }) => {
  return (
    <StyledProductPhoto>
      <img src={prod_img_url} alt="Product" />
    </StyledProductPhoto>
  );
};

ProductPhoto.propTypes = {
  prod_img_url: PropTypes.string.isRequired,
};

export default ProductPhoto;
