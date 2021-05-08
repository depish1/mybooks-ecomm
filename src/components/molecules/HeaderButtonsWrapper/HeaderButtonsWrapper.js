import React from 'react';
import StyledHeaderButtonsWrapper from './HeaderButtonsWrapper.styles';
import { connect } from 'react-redux';

const HeaderButtonsWrapper = ({ children, isOpen }) => {
  return <StyledHeaderButtonsWrapper className={isOpen ? 'isVisible' : 0}>{children}</StyledHeaderButtonsWrapper>;
};

const mapStateToProps = (state) => ({
  isOpen: state.menu.isOpen,
});

export default connect(mapStateToProps, {})(HeaderButtonsWrapper);
