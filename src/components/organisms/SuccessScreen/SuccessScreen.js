import StyledSuccessScreen from './SuccessScreen.styles';
import { ReactComponent as SuccessIcon } from 'assets/icons/SuccessIcon.svg';
import Button from 'components/atoms/Button/Button';
import { redirect } from 'helpers';
import { useHistory } from 'react-router-dom';

const SuccessScreen = () => {
  const history = useHistory();
  const handleClick = () => {
    redirect(null, '/', history);
  };
  return (
    <StyledSuccessScreen>
      <SuccessIcon />
      <p>Transakcja zakończona pomyślnie</p>
      <Button isPrimary text="Wróć do zakupów" onClickHandler={handleClick} />
    </StyledSuccessScreen>
  );
};

export default SuccessScreen;
