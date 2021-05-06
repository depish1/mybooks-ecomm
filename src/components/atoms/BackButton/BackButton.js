import StyledBackButton from './BackButton.styles';
import { ReactComponent as ArrowBack } from 'assets/icons/ArrowBack.svg';

const BackButton = ({ onClickHandler, text }) => {
  return (
    <StyledBackButton onClick={onClickHandler}>
      <ArrowBack />
      {text}
    </StyledBackButton>
  );
};

export default BackButton;
