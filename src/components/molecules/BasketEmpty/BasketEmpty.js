import StyledBasketEmpty from './BasketEmpty.styles';
import { ReactComponent as BasketIcon } from 'assets/icons/BasketIcon.svg';

const BasketEmpty = () => {
  return (
    <StyledBasketEmpty>
      <BasketIcon />
      <span>Koszyk jest pusty</span>
    </StyledBasketEmpty>
  );
};

export default BasketEmpty;
