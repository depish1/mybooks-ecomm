import StyledButton from './Button.styles';

const Button = ({ isSecondary, children, onClickHandler, path = null }) => {
  return (
    <StyledButton onClick={(e) => onClickHandler(e, path)} className={isSecondary ? 'secondary' : null}>
      {children}
    </StyledButton>
  );
};

export default Button;
