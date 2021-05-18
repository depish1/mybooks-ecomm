import StyledBackButton from './BackButton.styles';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowBack } from 'assets/icons/ArrowBack.svg';
import { useHistory } from 'react-router-dom';

const BackButton = ({ text }) => {
  const history = useHistory();
  const onClickHandler = (e) => {
    e.preventDefault();
    history.push('/');
  };
  return (
    <StyledBackButton onClick={onClickHandler}>
      <ArrowBack />
      {text}
    </StyledBackButton>
  );
};

BackButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BackButton;
