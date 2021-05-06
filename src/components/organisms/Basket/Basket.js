import React from 'react';
import StyledBasket from './Basket.styles';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import BasketList from 'components/organisms/BasketList/BasketList';

const Basket = () => {
  return (
    <StyledBasket>
      <HeadlinePrimary text="Zawartość koszyka" />
      <BasketList />
    </StyledBasket>
  );
};

export default Basket;
