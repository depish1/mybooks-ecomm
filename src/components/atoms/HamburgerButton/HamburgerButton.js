import StyledHamburgerButton from './HamburgerButton.styles';
import { useState, useEffect } from 'react';

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHamburgerButton className={isOpen ? 'isOpen' : null} onClick={handleMenuClick}>
      <span className="hamburger-top"></span>
      <span className="hamburger-bottom"></span>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
