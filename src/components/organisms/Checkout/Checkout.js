import StyledCheckout from './Checkout.styles';
import Loader from 'components/organisms/Loader/Loader';

const Checkout = () => {
  return (
    <StyledCheckout>
      <p>Formularz adresu dostawy</p>
      <p>Wybór metody płatności</p>
      <p>Wybór sposobu dostawy</p>
      <p>Podsumowanie</p>
      <p>Button "Zapłać"</p>
      <Loader />
    </StyledCheckout>
  );
};

export default Checkout;
