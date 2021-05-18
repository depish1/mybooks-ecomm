import StyledBasketDeleteButton from './BasketDeleteButton.styles';
import { connect } from 'react-redux';
import { basketActions } from 'redux/basket/index';
import PropTypes from 'prop-types';

const BasketDeleteButton = ({ id, removeProduct }) => {
  const deleteProductHandler = () => {
    removeProduct(id);
  };
  return <StyledBasketDeleteButton onClick={deleteProductHandler}>x</StyledBasketDeleteButton>;
};

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (prod_id) => dispatch(basketActions.removeProduct(prod_id)),
});
BasketDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BasketDeleteButton);
