import React from 'react';
import StyledHeaderButton from './HeaderButton.styles';

import HeaderIcon from 'components/atoms/HeaderIcon/HeaderIcon';

const HeaderButton = ({ to, isLogged, isBasket, isProducts, children }) => {
  return (
    <StyledHeaderButton to={to}>
      {children}
      <HeaderIcon isBasket={isBasket} isProducts={isProducts} />
    </StyledHeaderButton>
  );
};

export default HeaderButton;
