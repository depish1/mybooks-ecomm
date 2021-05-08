import React, { useState } from 'react';
import StyledSignIn from './SignIn.styles';
import FormField from 'components/molecules/FormField/FormField';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from 'redux/user/index';
import firebase from 'firebase.js';
import { redirect } from 'helpers';

const SignIn = ({ user, login, setLoader }) => {
  const [loginCredential, setLoginCredential] = useState({ email: '', password: '' });
  const [isWrong, setIsWrong] = useState({ email: false, password: false });
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  if (user.userData) redirect(null, '/', history);

  const handleChange = (e) => {
    setLoginCredential((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    firebase
      .auth()
      .signInWithEmailAndPassword(loginCredential.email, loginCredential.password)
      .then(({ user }) => {
        login({
          uid: user.uid,
          email: user.email,
        });
        redirect(null, '/', history);
      })
      .catch((error) => {
        console.log('errorCode: ', error.code);
        console.log('errorMessage: ', error.message);
        setErrors('Adres email lub hasło nieprawidłowe. Spróbuj ponownie.');
      });
  };

  return (
    <StyledSignIn>
      <HeadlinePrimary text="Logowanie" />
      <FormField label="Adres Email:" name="email" id="email" onChangeHandler={handleChange} />
      <FormField label="Hasło:" name="password" id="password" type="password" onChangeHandler={handleChange} />
      <Button isPrimary text="Zaloguj się" onClickHandler={handleSubmit} />
      <span className="login-text">Nie masz jeszcze konta?</span>
      <Button onClickHandler={(e) => redirect(e, '/signup', history)} text="Zarejestruj się" />
    </StyledSignIn>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(userActions.login(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
