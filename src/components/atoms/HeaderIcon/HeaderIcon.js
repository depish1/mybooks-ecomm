import React from 'react';
import { connect } from 'react-redux';
import StyledHeaderIcon, { StyledBasketCounter } from './HeaderIcon.styles';
import { ReactComponent as LoginIcon } from 'assets/icons/LoginIcon.svg';
import { ReactComponent as BasketIcon } from 'assets/icons/BasketIcon.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/ArrowIcon.svg';

const HeaderIcon = ({ isBasket, isProducts, basket }) => {
  let iconToRender;
  if (isBasket) {
    iconToRender = <BasketIcon className="icon" />;
  } else if (isProducts) {
    iconToRender = <ArrowIcon className="icon" />;
  } else {
    iconToRender = <LoginIcon className="icon" />;
  }

  return (
    <StyledHeaderIcon>
      {iconToRender}
      {isBasket ? <StyledBasketCounter>{basket.list?.length || 0}</StyledBasketCounter> : null}
    </StyledHeaderIcon>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
});

export default connect(mapStateToProps, {})(HeaderIcon);
