import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledSignIn from './SignIn.styles';
import FormField from 'components/molecules/FormField/FormField';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from 'redux/user/index';
import { loaderActions } from 'redux/loader/index';
import firebase from 'utils/firebase.js';
import { redirect } from 'utils/helpers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignIn = ({ userData, login, setLoader }) => {
  const [error, setError] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (userData) redirect(null, '/', history);
  }, [history, userData]);

  const validate = Yup.object({
    email: Yup.string().email('Wpisz poprawny adres email').required('Email jest wymagany'),
    password: Yup.string().required('Hasło jest wymagane'),
  });

  const handleSubmit = async ({ email, password }) => {
    setLoader(true);
    setError(null);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        firebase
          .firestore()
          .collection('usersData')
          .where('uid', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              login({
                uid: user.uid,
                email: user.email,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
              });
              redirect(null, '/', history);
            });
          });
      })
      .catch((error) => {
        console.log(error);
        setError('Login lub hasło nieprawidłowe');
      });
    setLoader(false);
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
      <StyledSignIn>
        <HeadlinePrimary text="Logowanie" />
        <Form>
          <FormField label="Adres Email:" name="email" type="text" />
          <FormField label="Hasło:" name="password" type="password" />
          <Button isPrimary text="Zaloguj się" type="submit" />
        </Form>
        <p className={error ? 'isVisible' : undefined}>{error}</p>
        <span className="login-text">Nie masz jeszcze konta?</span>
        <Button onClickHandler={(e) => redirect(e, '/signup', history)} text="Zarejestruj się" />
      </StyledSignIn>
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

SignIn.propTypes = {
  setLoader: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
