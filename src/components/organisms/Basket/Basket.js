import React from 'react';
import StyledBasket from './Basket.styles';
import HeadlinePrimary from 'components/atoms/HeadlinePrimary/HeadlinePrimary';
import BasketList from 'components/organisms/BasketList/BasketList';
import BasketSummary from 'components/molecules/BasketSummary/BasketSummary';
import BasketEmpty from 'components/molecules/BasketEmpty/BasketEmpty';
import { connect } from 'react-redux';

const Basket = ({ basket }) => {
  return (
    <StyledBasket>
      <HeadlinePrimary text="Zawartość koszyka" />
      {basket.length ? <BasketList /> : <BasketEmpty />}
      <BasketSummary />
    </StyledBasket>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket.list,
});

// const mapDispatchToProps = (dispatch) => ({
//   setProducts: (products) => dispatch(actions.setProducts(products)),
// });

export default connect(mapStateToProps)(Basket);
