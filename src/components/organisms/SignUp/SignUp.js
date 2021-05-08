import React, { useState } from 'react';
import StyledSignUp from './SignUp.styles';
import FormField from 'components/molecules/FormField/FormField';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({ firstName: '', email: '', password: '', password2: '', consent: false });

  const handleChange = (e) => {
    setSignUpData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };
  return (
    <StyledSignUp>
      <HeadlinePrimary text="Rejestracja" />
      <FormField isRequired label="Imie:" name="firstName" id="firstName" onChangeHandler={handleChange} />
      <FormField isRequired label="Adres Email:" name="email" id="email" onChangeHandler={handleChange} />
      <FormField isRequired label="Hasło:" name="password" id="password" type="password" onChangeHandler={handleChange} />
      <FormField isRequired label="Powtórz hasło:" name="password2" id="password2" type="password" onChangeHandler={handleChange} />
      <FormField isRequired label="Akceptuję regulamin  Mybook.com:" name="consent" id="consent" type="checkbox" onChangeHandler={handleChange} />

      <Button isPrimary text="Zarejestruj się" onClickHandler={handleSubmit} />
    </StyledSignUp>
  );
};

export default SignUp;
