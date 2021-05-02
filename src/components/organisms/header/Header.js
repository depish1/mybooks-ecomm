import React from 'react';
import StyledHeader from './Header.styles';
import Logo from 'components/atoms/Logo/Logo';
import HeaderButton from 'components/molecules/HeaderButton/HeaderButton';
import HeaderButtonsWrapper from 'components/molecules/HeaderButtonsWrapper/HeaderButtonsWrapper';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <HeaderButtonsWrapper>
        <HeaderButton to="/products" isProducts>
          Oferta
        </HeaderButton>
        <HeaderButton to="/login">Zaloguj / Zarejestruj się</HeaderButton>
        <HeaderButton to="/basket" isBasket>
          Koszyk
        </HeaderButton>
      </HeaderButtonsWrapper>
    </StyledHeader>
  );
};

export default Header;
