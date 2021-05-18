import StyledButton from './Button.styles';

const Button = ({ isDisabled = false, isPrimary, isToBasket, onClickHandler, text, type }) => {
  const classString = `${isPrimary ? 'primary' : null} ${isToBasket ? 'toBasket' : null}`;
  return (
    <StyledButton disabled={isDisabled} onClick={onClickHandler} className={classString} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
