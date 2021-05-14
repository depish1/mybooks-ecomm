import React from 'react';
import StyledHeaderButton from './HeaderButton.styles';
import HeaderIcon from 'components/atoms/HeaderIcon/HeaderIcon';
import { connect } from 'react-redux';
import { menuActions } from 'redux/menu/index';
import { userActions } from 'redux/user/index';
import { redirect } from 'helpers';
import { useHistory } from 'react-router-dom';

const HeaderButton = ({ to, isLogout, isBasket, isProducts, children, closeMenu, logout }) => {
  const history = useHistory();

  const onClickHandler = (e) => {
    if (isLogout) {
      logout();
    }
    console.log('logout');
    redirect(e, to, history);
    closeMenu();
  };

  return (
    <StyledHeaderButton onClick={onClickHandler}>
      {children}
      <HeaderIcon isBasket={isBasket} isProducts={isProducts} to={to} />
    </StyledHeaderButton>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(menuActions.closeMenu()),
  logout: (userData) => dispatch(userActions.logout(userData)),
});

export default connect(null, mapDispatchToProps)(HeaderButton);
