import StyledHamburgerButton from './HamburgerButton.styles';
import { connect } from 'react-redux';
import { menuActions } from 'redux/menu/index';

const HamburgerButton = ({ switchMenu, isOpen }) => {
  const handleSwitchMenu = () => {
    switchMenu();
  };
  console.log(isOpen);
  return (
    <StyledHamburgerButton className={isOpen ? 'isOpen' : null} onClick={handleSwitchMenu}>
      <span className="hamburger-top"></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerButton);
