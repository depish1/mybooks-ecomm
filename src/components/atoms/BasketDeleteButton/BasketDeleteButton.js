import StyledBasketDeleteButton from './BasketDeleteButton.styles';
import { connect } from 'react-redux';
import { basketActions } from 'redux/basket/index';

const BasketDeleteButton = ({ id, removeProduct }) => {
  const deleteProductHandler = () => {
    removeProduct(id);
  };
  return <StyledBasketDeleteButton onClick={deleteProductHandler}>x</StyledBasketDeleteButton>;
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod_id) => dispatch(basketActions.removeProduct(prod_id)),
});

export default connect(null, mapDispatchToProps)(BasketDeleteButton);
