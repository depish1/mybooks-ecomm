import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StyledSignUp from './SignUp.styles';
import FormField from 'components/molecules/FormField/FormField';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { redirect } from 'helpers';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase.js';
import { userActions } from 'redux/user/index';
import { loaderActions } from 'redux/loader/index';

const SignUp = ({ user, login, setLoader }) => {
  const [error, setError] = useState(null);
  const validate = Yup.object({
    firstName: Yup.string().max(20, 'Maksymalnie 20 znaków').required('To pole jest wymagane'),
    lastName: Yup.string().max(20, 'Maksymalnie 20 znaków').required('To pole jest wymagane'),
    email: Yup.string().email('Wpisz poprawny adres email').required('To pole jest wymagane'),
    password: Yup.string().min(6, 'Hasło musi mieć minimum 6 znaków').required('To pole jest wymagane'),
    confirmPassword: Yup.string()
      .required('To pole jest wymagane')
      .oneOf([Yup.ref('password'), null], 'Hasła muszą być jednakowe'),
    consent: Yup.bool().oneOf([true], 'Akceptacja regulaminu jest wymagana'),
  });

  const history = useHistory();

  useEffect(() => {
    if (user.userData) redirect(null, '/', history);
  }, [history, user.userData]);

  const handleSubmit = async ({ email, password, firstName, lastName, consent }) => {
    setLoader(true);
    console.log(email, password, firstName, lastName, consent);
    setError(null);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        firebase.firestore().collection('usersData').add({
          uid: user.uid,
          firstName,
          lastName,
          consent,
        });
        login({
          uid: user.uid,
          firstName,
          lastName,
          email: user.email,
        });
        redirect(null, '/', history);
      })
      .catch((error) => {
        console.log(error.code === 'auth/email-already-in-use');
        if (error.code === 'auth/email-already-in-use') setError('Adres email zajęty.');
        console.log(error);
      });
    setLoader(false);
  };
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        consent: false,
      }}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
    >
      <StyledSignUp>
        <HeadlinePrimary text="Rejestracja" />
        <Form>
          <FormField isRequired label="Imie:" name="firstName" id="firstName" />
          <FormField isRequired label="Nazwisko:" name="lastName" id="lastName" />
          <FormField isRequired label="Adres Email:" name="email" id="email" />
          <FormField isRequired label="Hasło:" name="password" id="password" type="password" />
          <FormField isRequired label="Powtórz hasło:" name="confirmPassword" id="confirmPassword" type="password" />
          <FormField isRequired label="Akceptuję regulamin  Mybook.com:" name="consent" id="consent" type="checkbox" />
          <Button isPrimary text="Zarejestruj się" type="submit" />
        </Form>
        <p className={error ? 'isVisible' : undefined}>{error}</p>
      </StyledSignUp>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(userActions.login(userData)),
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
