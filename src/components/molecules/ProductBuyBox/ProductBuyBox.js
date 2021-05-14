import { useState, useEffect } from 'react';
import StyledProductBuyBox from './ProductBuyBox.styles';
import Button from 'components/atoms/Button/Button';
import actions from 'redux/basket/actions';
import { connect } from 'react-redux';

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

export default connect(null, mapDispatchToProps)(ProductBuyBox);
