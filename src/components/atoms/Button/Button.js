import StyledButton from './Button.styles';
import PropTypes from 'prop-types';

const Button = ({ isDisabled, isPrimary, isToBasket, onClickHandler, text, type }) => {
  const classString = `${isPrimary ? 'primary' : null} ${isToBasket ? 'toBasket' : null}`;
  return (
    <StyledButton disabled={isDisabled} onClick={onClickHandler} className={classString} type={type}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isToBasket: PropTypes.bool,
  onClickHandler: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  isDisabled: false,
};

export default Button;
