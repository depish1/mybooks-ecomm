import StyledButton from './Button.styles';

const Button = ({ isPrimary, isToBasket, children, onClickHandler }) => {
  const classString = (isPrimary ? 'primary' : null) + ' ' + (isToBasket ? 'toBasket' : null);
  return (
    <StyledButton onClick={onClickHandler} className={classString}>
      {children}
    </StyledButton>
  );
};

export default Button;
