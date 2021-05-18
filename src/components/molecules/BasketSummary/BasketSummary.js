import StyledBasketSummary, { StyledBasketSummaryData, StyledBasketSummaryBack } from './BasketSummary.styles';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import BackButton from 'components/atoms/BackButton/BackButton';
import { connect } from 'react-redux';
import { reduceBasket } from 'helpers';
import { useHistory } from 'react-router-dom';
import { redirect } from 'helpers';

const BasketSummary = ({ basketList }) => {
  const uniqueBasket = reduceBasket(basketList);
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
          <span>{basketList.length + ' sztuk'}</span>
        </p>
        <Button
          isPrimary
          onClickHandler={() => {
            redirect(null, '/checkout', history);
          }}
          isDisabled={basketList.length ? false : true}
          text="Przejdź do płatności"
        />
      </StyledBasketSummaryData>
    </StyledBasketSummary>
  );
};

const mapStateToProps = (state) => ({
  basketList: state.basket.list,
});

BasketSummary.propTypes = {
  basketList: PropTypes.arrayOf(
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
};

export default connect(mapStateToProps)(BasketSummary);
