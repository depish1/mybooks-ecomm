import StyledHamburgerButton from './HamburgerButton.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { menuActions } from 'redux/menu/index';

const HamburgerButton = ({ switchMenu, isOpen }) => {
  const handleSwitchMenu = () => {
    switchMenu();
  };
  return (
    <StyledHamburgerButton className={isOpen ? 'isOpen' : null} onClick={handleSwitchMenu}>
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </StyledHamburgerButton>
  );
};
const mapDispatchToProps = (dispatch) => ({
  switchMenu: () => dispatch(menuActions.switchMenu()),
});
const mapStateToProps = (state) => ({
  isOpen: state.menu.isOpen,
});

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  switchMenu: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerButton);
