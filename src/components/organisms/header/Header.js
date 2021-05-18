import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './Header.styles';
import Logo from 'components/atoms/Logo/Logo';
import HeaderButton from 'components/molecules/HeaderButton/HeaderButton';
import HeaderButtonsWrapper from 'components/molecules/HeaderButtonsWrapper/HeaderButtonsWrapper';
import HamburgerButton from 'components/atoms/HamburgerButton/HamburgerButton';
import { connect } from 'react-redux';

const Header = ({ userData }) => {
  return (
    <StyledHeader>
      <Logo />
      <HamburgerButton />
      <HeaderButtonsWrapper>
        <HeaderButton to="/products" isProducts>
          Oferta
        </HeaderButton>
        {userData ? <HeaderButton to="/account">Twoje konto</HeaderButton> : <HeaderButton to="/signup">Zarejestruj się</HeaderButton>}
        {userData ? <HeaderButton isLogout>Wyloguj się</HeaderButton> : <HeaderButton to="/signin">Zaloguj się</HeaderButton>}
        <HeaderButton to="/basket" isBasket>
          Koszyk
        </HeaderButton>
      </HeaderButtonsWrapper>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

Header.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Header);
