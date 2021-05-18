import StyledBasketList from './BasketList.styles';
import PropTypes from 'prop-types';
import BasketListElement from 'components/molecules/BasketListElement/BasketListElement';
import { connect } from 'react-redux';

const BasketList = ({ uniqueBasket }) => {
  return (
    <StyledBasketList>
      {uniqueBasket.map(({ prod_id, prod_name, prod_author, prod_price, prod_img_url, prod_quantity, prod_value }, i) => {
        return (
          <BasketListElement
            key={prod_id}
            prod_name={prod_name}
            prod_id={prod_id}
            prod_price={prod_price}
            prod_img_url={prod_img_url}
            prod_author={prod_author}
            prod_quantity={prod_quantity}
            prod_value={prod_value}
          />
        );
      })}
    </StyledBasketList>
  );
};

const mapStateToProps = (state) => ({
  uniqueBasket: state.basket.unique,
});

BasketList.propTypes = {
  uniqueBasket: PropTypes.arrayOf(
    PropTypes.shape({
      prod_author: PropTypes.string,
      prod_id: PropTypes.string.isRequired,
      prod_img_url: PropTypes.string,
      prod_name: PropTypes.string.isRequired,
      prod_price: PropTypes.string.isRequired,
      prod_value: PropTypes.string.isRequired,
      prod_quantity: PropTypes.number,
    })
  ).isRequired,
};

export default connect(mapStateToProps)(BasketList);
