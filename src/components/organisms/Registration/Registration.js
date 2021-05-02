import React from 'react';
import StyledRegistration from './Registration.styles';
import FormInput from 'components/molecules/FormInput/FormInput';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';

const Registration = () => {
  return (
    <StyledRegistration>
      <HeadlinePrimary>Rejestracja</HeadlinePrimary>
      <FormInput isRequired label="Imie:" name="name" id="name" />
      <FormInput isRequired label="Nazwisko:" name="surname" id="surname" />
      <FormInput isRequired label="Adres Email:" name="email" id="email" />
      <FormInput isRequired label="Hasło:" name="pwd" id="pwd" type="password" />
      <FormInput isRequired label="Powtórz hasło:" name="pwd2" id="pwd2" type="password" />
      <FormInput isRequired label="Akceptuję regulamin  Mybook.com:" name="consent" id="consent" type="checkbox" />

      <Button>Zarejestruj się</Button>
    </StyledRegistration>
  );
};

export default Registration;
