import React from 'react';
import StyledHeader from './Header.styles';
import Logo from 'components/atoms/Logo/Logo';
import HeaderButton from 'components/molecules/HeaderButton/HeaderButton';
import HeaderButtonsWrapper from 'components/molecules/HeaderButtonsWrapper/HeaderButtonsWrapper';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import { connect } from 'react-redux';

const Header = ({ user }) => {
  return (
    <StyledHeader>
      <Logo />
      <HamburgerButton />
      <HeaderButtonsWrapper>
        <HeaderButton to="/products" isProducts>
          Oferta
        </HeaderButton>
        {user.userData ? <HeaderButton to="/account">Twoje konto</HeaderButton> : <HeaderButton to="/signup">Zarejestruj się</HeaderButton>}
        {user.userData ? <HeaderButton isLogout>Wyloguj się</HeaderButton> : <HeaderButton to="/signin">Zaloguj się</HeaderButton>}
        <HeaderButton to="/basket" isBasket>
          Koszyk
        </HeaderButton>
      </HeaderButtonsWrapper>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
