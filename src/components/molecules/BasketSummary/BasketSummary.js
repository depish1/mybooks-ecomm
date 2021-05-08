import StyledBasketSummary, { StyledBasketSummaryData, StyledBasketSummaryBack } from './BasketSummary.styles';
import Button from 'components/atoms/Button/Button';
import BackButton from 'components/atoms/BackButton/BackButton';
import { connect } from 'react-redux';
import { reduceBasket } from 'helpers';
import { useHistory } from 'react-router-dom';
import { redirect } from 'helpers';

const BasketSummary = ({ basket }) => {
  const uniqueBasket = reduceBasket(basket);
  const history = useHistory();
  return (
    <StyledBasketSummary>
      <StyledBasketSummaryBack>
        <BackButton onClick={() => {}} text="Wróć do zakupów" />
      </StyledBasketSummaryBack>
      <StyledBasketSummaryData>
        <p className="price">
          {'Kwota do zapłaty: '}
          <span className="price">
            {(uniqueBasket.length ? uniqueBasket.reduce((prev, curr) => prev + parseFloat(curr.prod_value), 0) : 0).toFixed(2)} zł
          </span>
        </p>
        <p>
          {'Liczba produktów: '}
          <span>{basket.length + ' sztuk'}</span>
        </p>
        <Button
          isPrimary
          onClickHandler={() => {
            redirect(null, '/checkout', history);
          }}
          text="Przejdź do płatności"
        />
      </StyledBasketSummaryData>
    </StyledBasketSummary>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket.list,
});

export default connect(mapStateToProps)(BasketSummary);
