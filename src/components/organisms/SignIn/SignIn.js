import React, { useEffect, useState } from 'react';
import StyledSignIn from './SignIn.styles';
import FormField from 'components/molecules/FormField/FormField';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from 'redux/user/index';
import { loaderActions } from 'redux/loader/index';
import firebase from 'firebase.js';
import { redirect } from 'helpers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignIn = ({ user, login, setLoader }) => {
  const [isError, setIsError] = useState(false);
  const validate = Yup.object({
    email: Yup.string().email('Wpisz poprawny adres email').required('Email jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane'),
  });
  const history = useHistory();

  useEffect(() => {
    if (user.userData) redirect(null, '/', history);
  }, [history, user.userData]);

  const handleSubmit = (values) => {
    console.log(values.email, values.password);
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(({ user }) => {
        login({
          uid: user.uid,
          email: user.email,
        });
        redirect(null, '/', history);
      })
      .catch((error) => {
        setIsError(true);
        console.log('errorCode: ', error.code);
        console.log('errorMessage: ', error.message);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(formik) => (
        <StyledSignIn>
          <HeadlinePrimary text="Logowanie" />
          <Form>
            <FormField label="Adres Email:" name="email" type="text" />
            <FormField label="Hasło:" name="password" type="password" />
            <Button isPrimary text="Zaloguj się" type="submit" />
          </Form>
          <p className={isError ? 'isVisible' : undefined}>Login lub hasło nieprawidłowe</p>
          <span className="login-text">Nie masz jeszcze konta?</span>
          <Button onClickHandler={(e) => redirect(e, '/signup', history)} text="Zarejestruj się" />
        </StyledSignIn>
      )}
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
