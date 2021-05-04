import React from 'react';
import StyledProductBuyBox from './ProductBuyBox.styles';
import Button from 'components/atoms/Button/Button';
import actions from 'redux/basket/actions';
import { connect } from 'react-redux';

const ProductBuyBox = ({ prod_price, prod_id, addProduct }) => {
  const addProductToBasket = () => {
    addProduct(prod_id);
  };
  return (
    <StyledProductBuyBox>
      <span className="price">{prod_price} zł</span>
      <Button onClickHandler={addProductToBasket} isPrimary>
        Dodaj do koszyka
      </Button>
    </StyledProductBuyBox>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProduct: (prod_id) => dispatch(actions.add(prod_id)),
});

export default connect(null, mapDispatchToProps)(ProductBuyBox);
