import React, { useState, useEffect } from 'react';
import StyledCheckout, { FormWrapper, RadioWrapper } from './Checkout.styles';
import FormField from 'components/molecules/FormField/FormField';
import RadioField from 'components/molecules/RadioField/RadioField';
import RadioGroup from 'components/molecules/RadioGroup/RadioGroup';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from 'redux/user/index';
import { loaderActions } from 'redux/loader/index';
import { basketActions } from 'redux/basket/index';
import firebase from 'firebase.js';
import { redirect } from 'helpers';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = ({ user, basket, setLoader }) => {
  const history = useHistory();
  const [error, setError] = useState(null);
  useEffect(() => {
    if (user.userData) redirect(null, '/', history);
  }, [history, user.userData]);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const validate = Yup.object({
    street: Yup.string().required('Pole jest wymagane').min(2, 'Ulica musi mieć minimum 3 znaki'),
    houseNumber: Yup.number().required('Pole jest wymagane'),
    flatNumber: Yup.number(),
    zipCode: Yup.string()
      .required('Pole jest wymagane')
      .matches(/^[0-9]{5}$/, 'Musi być dokładnie 5 cyfr'),

    city: Yup.string().required('Miasto jest wymagane').min(2, 'Miasto musi mieć minimum 3 znaki'),
    delivery: Yup.string().required('Nie wybrano sposobu dostawy'),
    payment: Yup.string().required('Nie wybrano sposobu płatności'),
  });
  return (
    <Formik
      initialValues={{
        street: '',
        houseNumber: '',
        flatNumber: '',
        zipCode: '',
        city: '',
        delivery: '',
        payment: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
    >
      <StyledCheckout>
        <Form>
          <FormWrapper>
            <HeadlinePrimary text="Adres dostawy:" />
            <FormField label="Ulica:" name="street" type="text" />
            <div className="row">
              <FormField isRow={true} label="Nr. budynku:" name="houseNumber" type="number" />
              <FormField isRow={true} label="Nr. lokalu:" name="flatNumber" type="number" />
            </div>
            <FormField label="Kod pocztowy:" name="zipCode" type="text" isTwoColumnsGrid />
            <FormField label="Miasto:" name="city" type="text" isTwoColumnsGrid />
          </FormWrapper>
          <RadioGroup label="Sposób dostawy:" name="delivery" id="delivery">
            <RadioField label={{ option: 'Poczta Polska', defaultPrice: 8.99, add: 72 }} name="delivery" value="pocztaPolska" id="pocztaPolska" />
            <RadioField label={{ option: 'Kurier DHL', defaultPrice: 12.99, add: 48 }} name="delivery" value="dhl" id="dhl" />
            <RadioField label={{ option: 'Kurier UPS', defaultPrice: 11.99, add: 48 }} name="delivery" value="ups" id="ups" />
          </RadioGroup>
          <RadioGroup label="Sposób płatności:" name="payment" id="payment">
            <RadioField label={{ option: 'Płatność przelewem', defaultPrice: 0.0, add: 24 }} name="payment" value="cash" id="cash" />
            <RadioField label={{ option: 'Płatność gotówką', defaultPrice: 4, add: 0 }} name="payment" value="transfer" id="transfer" />
          </RadioGroup>
          {/* <RadioWrapper>
            <HeadlinePrimary text="Sposób płatności:" />
            <RadioField option="Płatność przelewem" defaultPrice={0.0} add={24} name="payment" id="cash" />
            <RadioField option="Płatność przy odbiorze" defaultPrice={4} add={2} name="payment" id="transfer" />
          </RadioWrapper> */}

          <Button isPrimary text="Zapłać" type="submit" />
        </Form>
        <p className={error ? 'isVisible' : undefined}>{error}</p>
      </StyledCheckout>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  basket: state.basket,
});

const mapDispatchToProps = (dispatch) => ({
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
