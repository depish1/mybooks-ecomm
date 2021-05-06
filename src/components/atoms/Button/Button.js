import StyledButton from './Button.styles';

const Button = ({ isDisabled = false, isPrimary, isToBasket, onClickHandler, text }) => {
  const classString = (isPrimary ? 'primary' : null) + ' ' + (isToBasket ? 'toBasket' : null);
  return (
    <StyledButton disabled={isDisabled} onClick={onClickHandler} className={classString}>
      {text}
    </StyledButton>
  );
};

export default Button;
