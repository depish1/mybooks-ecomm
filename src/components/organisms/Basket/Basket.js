import React from 'react';
import PropTypes from 'prop-types';
import StyledBasket from './Basket.styles';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import BasketList from 'components/organisms/BasketList/BasketList';
import BasketSummary from 'components/molecules/BasketSummary/BasketSummary';
import BasketEmpty from 'components/molecules/BasketEmpty/BasketEmpty';
import { connect } from 'react-redux';

const Basket = ({ basketList }) => {
  return (
    <StyledBasket>
      <HeadlinePrimary text="Zawartość koszyka" />
      {basketList.length ? <BasketList /> : <BasketEmpty />}
      <BasketSummary />
    </StyledBasket>
  );
};

const mapStateToProps = (state) => ({
  basketList: state.basket.list,
});

Basket.propTypes = {
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

export default connect(mapStateToProps)(Basket);
