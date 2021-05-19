import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledCheckout, { FormWrapper } from './Checkout.styles';
import FormField from 'components/molecules/FormField/FormField';
import RadioField from 'components/molecules/RadioField/RadioField';
import RadioGroup from 'components/molecules/RadioGroup/RadioGroup';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import Button from 'components/atoms/Button/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loaderActions } from 'redux/loader/index';
import { basketActions } from 'redux/basket/index';
import firebase from 'firebase.js';
import { redirect } from 'helpers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const Checkout = ({ userData, basket, setLoader, clear }) => {
  const history = useHistory();
  const [specialProducts, setSpecialProducts] = useState(false);

  console.log(userData);

  useEffect(() => {
    if (basket.list.length === 0) {
      redirect(null, '/', history);
    } else {
      const downloadSpecialProducts = async () => {
        setLoader(true);
        await firebase
          .firestore()
          .collection('specialProducts')
          .get()
          .then((querySnapshot) => {
            setSpecialProducts(
              querySnapshot.docs.map((doc) => {
                return { ...doc.data(), prod_id: doc.id };
              })
            );
          });
        setLoader(false);
      };
      downloadSpecialProducts();
    }
  }, [history, basket.list, setLoader]);

  const handleSubmit = async ({ street, houseNumber, flatNumber, zipCode, city, delivery, payment }) => {
    setLoader(true);
    const adress = { street, houseNumber, flatNumber, zipCode, city };
    const transaction = {
      uid: userData ? userData.uid : null,
      adress,
      delivery,
      payment,
      calendarDate: new Date().toJSON().slice(0, 10),
      products: [
        ...basket.unique,
        {
          prod_author: null,
          prod_category: 'delivery',
          prod_id: specialProducts.filter((prod) => prod.prod_name === delivery)[0].prod_id,
          prod_img_url: null,
          prod_name: specialProducts.filter((prod) => prod.prod_name === delivery)[0].prod_name,
          prod_price: specialProducts.filter((prod) => prod.prod_name === delivery)[0].prod_price,
          prod_quantity: null,
          prod_value: specialProducts.filter((prod) => prod.prod_name === delivery)[0].prod_price,
          prod_year: null,
        },
        {
          prod_author: null,
          prod_category: 'payment',
          prod_id: specialProducts.filter((prod) => prod.prod_name === payment)[0].prod_id,
          prod_img_url: null,
          prod_name: specialProducts.filter((prod) => prod.prod_name === payment)[0].prod_name,
          prod_price: specialProducts.filter((prod) => prod.prod_name === payment)[0].prod_price,
          prod_quantity: null,
          prod_value: specialProducts.filter((prod) => prod.prod_name === payment)[0].prod_price,
          prod_year: null,
        },
      ],
    };
    console.log(transaction);
    await firebase.firestore().collection('transactions').add(transaction);
    setLoader(false);
    redirect(null, '/success-screen', history);
    clear();
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
          {specialProducts ? (
            <RadioGroup label="Sposób dostawy:" name="delivery" id="delivery">
              {specialProducts
                .filter((prod) => prod.prod_category === 'delivery')
                .map((delivery) => (
                  <RadioField
                    key={delivery.prod_id}
                    label={{ option: delivery.prod_name, defaultPrice: delivery.prod_price, add: delivery.prod_add }}
                    name={delivery.prod_category}
                    value={delivery.prod_name}
                    id={delivery.prod_short_name}
                  />
                ))}
            </RadioGroup>
          ) : null}
          {specialProducts ? (
            <RadioGroup label="Sposób płatności:" name="payment" id="payment">
              {specialProducts
                .filter((prod) => prod.prod_category === 'payment')
                .map((payment) => (
                  <RadioField
                    key={payment.prod_id}
                    label={{ option: payment.prod_name, defaultPrice: payment.prod_price, add: payment.prod_add }}
                    name={payment.prod_category}
                    value={payment.prod_name}
                    id={payment.prod_short_name}
                  />
                ))}
            </RadioGroup>
          ) : null}

          <Button isPrimary text="Zapłać" type="submit" />
        </Form>
      </StyledCheckout>
    </Formik>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
  basket: state.basket,
});

const mapDispatchToProps = (dispatch) => ({
  setLoader: (isLoader) => dispatch(loaderActions.setLoader(isLoader)),
  clear: () => dispatch(basketActions.clear()),
});

Checkout.propTypes = {
  setLoader: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
  }),
  basket: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({
        prod_author: PropTypes.string.isRequired,
        prod_category: PropTypes.string.isRequired,
        prod_id: PropTypes.string.isRequired,
        prod_img_url: PropTypes.string.isRequired,
        prod_name: PropTypes.string.isRequired,
        prod_price: PropTypes.string.isRequired,
        prod_year: PropTypes.string.isRequired,
      })
    ),
    unique: PropTypes.arrayOf(
      PropTypes.shape({
        prod_author: PropTypes.string.isRequired,
        prod_category: PropTypes.string.isRequired,
        prod_id: PropTypes.string.isRequired,
        prod_img_url: PropTypes.string.isRequired,
        prod_name: PropTypes.string.isRequired,
        prod_price: PropTypes.string.isRequired,
        prod_value: PropTypes.string.isRequired,
        prod_year: PropTypes.string.isRequired,
        prod_quantity: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
