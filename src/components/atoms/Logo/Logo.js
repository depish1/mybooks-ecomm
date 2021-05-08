import React from 'react';
import StyledLogo from './Logo.styles';
import { redirect } from 'helpers';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuActions } from 'redux/menu/index';

const Logo = ({ closeMenu }) => {
  const history = useHistory();

  return (
    <StyledLogo
      onClick={(e) => {
        redirect(e, '/', history);
        closeMenu();
      }}
      to="/"
    >
      <h1>
        <span>My</span>books.<span>com</span>
      </h1>
    </StyledLogo>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(menuActions.closeMenu()),
});

export default connect(null, mapDispatchToProps)(Logo);
