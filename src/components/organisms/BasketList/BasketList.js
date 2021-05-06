import StyledBasketList from './BasketList.styles';

import BasketListElement from 'components/molecules/BasketListElement/BasketListElement';
import { connect } from 'react-redux';
import { reduceBasket } from 'helpers';

const BasketList = ({ basket }) => {
  const uniqueBasket = reduceBasket(basket);
  console.log(uniqueBasket);

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
  basket: state.basket.list,
});

// const mapDispatchToProps = (dispatch) => ({
//   setProducts: (products) => dispatch(actions.setProducts(products)),
// });

export default connect(mapStateToProps)(BasketList);
