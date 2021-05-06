import StyledBasketList from './BasketList.styles';

import BasketListElement from 'components/molecules/BasketListElement/BasketListElement';
import { connect } from 'react-redux';

const BasketList = ({ basket }) => {
  const uniqueBasket = [...new Set(basket.map((prod) => prod.prod_id))].map((id) => {
    return {
      ...basket.find((prod) => prod.prod_id === id),
    };
  });
  console.log(basket);
  console.log(uniqueBasket);

  return (
    <StyledBasketList>
      {uniqueBasket.map(({ prod_id, prod_name, prod_author, prod_price, prod_img_url }, i) => {
        return (
          <BasketListElement
            key={prod_id}
            prod_name={prod_name}
            prod_id={prod_id}
            prod_price={prod_price}
            prod_img_url={prod_img_url}
            prod_author={prod_author}
            prod_quantity={basket.filter((prod) => prod.prod_id === prod_id).length}
            lp={i + 1}
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
