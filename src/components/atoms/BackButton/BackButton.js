import StyledBackButton from './BackButton.styles';
import { ReactComponent as ArrowBack } from 'assets/icons/ArrowBack.svg';
import { useHistory } from 'react-router-dom';

const BackButton = ({ onClickHandler, text }) => {
  const history = useHistory();
  const Redirect = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <StyledBackButton onClick={Redirect}>
      <ArrowBack />
      {text}
    </StyledBackButton>
  );
};

export default BackButton;
