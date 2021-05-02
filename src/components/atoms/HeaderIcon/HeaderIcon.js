import React from 'react';
import StyledHeaderIcon, { StyledBasketCounter } from './HeaderIcon.styles';
import { ReactComponent as LoginIcon } from 'assets/icons/LoginIcon.svg';
import { ReactComponent as BasketIcon } from 'assets/icons/BasketIcon.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/ArrowIcon.svg';

const HeaderIcon = ({ isBasket, isProducts }) => {
  let iconToRender;
  if (isBasket) {
    iconToRender = <BasketIcon className="icon" />;
  } else if (isProducts) {
    iconToRender = <ArrowIcon className="icon" />;
  } else {
    iconToRender = <LoginIcon className="icon" />;
  }
  const basketSize = 0;
  return (
    <StyledHeaderIcon>
      {iconToRender}
      {isBasket ? <StyledBasketCounter>{basketSize}</StyledBasketCounter> : null}
    </StyledHeaderIcon>
  );
};

export default HeaderIcon;
