import React from 'react';
import StyledLogin from './Login.styles';
import FormInput from 'components/molecules/FormInput/FormInput';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const RedirectRegistration = (e) => {
    const path = '/registration';
    e.preventDefault();
    history.push(path);
  };

  return (
    <StyledLogin>
      <HeadlinePrimary text="Logowanie" />
      <FormInput label="Adres Email:" name="email" id="email" />
      <FormInput label="Hasło:" name="pwd" id="pwd" type="password" />
      <Button isPrimary text="Zaloguj się" />
      <span className="login-text">Nie masz jeszcze konta?</span>
      <Button onClickHandler={RedirectRegistration} text="Zarejestruj się" />
    </StyledLogin>
  );
};

export default Login;
