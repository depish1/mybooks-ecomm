import { useState, useEffect } from 'react';
import StyledProductBuyBox from './ProductBuyBox.styles';
import Button from 'components/atoms/Button/Button';
import actions from 'redux/basket/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProductBuyBox = ({ prod_data, addProduct }) => {
  const { prod_price } = prod_data;
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => setIsSuccess(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess]);

  const addProductToBasket = () => {
    addProduct(prod_data);
    setIsSuccess(true);
  };

  return (
    <StyledProductBuyBox>
      <span className="price">{prod_price} zł</span>
      <Button isDisabled={isSuccess ? true : false} onClickHandler={addProductToBasket} isPrimary text="Dodaj do koszyka" type="button" />
      <span className={`successMsg ${isSuccess ? 'isVisible' : null}`}>Produkt dodany do koszyka</span>
    </StyledProductBuyBox>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (prod_id) => dispatch(actions.add(prod_id)),
});

ProductBuyBox.propTypes = {
  prod_data: PropTypes.shape({
    prod_author: PropTypes.string.isRequired,
    prod_id: PropTypes.string.isRequired,
    prod_img_url: PropTypes.string.isRequired,
    prod_name: PropTypes.string.isRequired,
    prod_price: PropTypes.string.isRequired,
    prod_category: PropTypes.string.isRequired,
    prod_year: PropTypes.string.isRequired,
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProductBuyBox);
