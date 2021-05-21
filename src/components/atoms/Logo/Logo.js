import React from 'react';
import PropTypes from 'prop-types';
import StyledLogo from './Logo.styles';
import { redirect } from 'utils/helpers';
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

Logo.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Logo);
