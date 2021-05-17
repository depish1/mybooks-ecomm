import StyledBasketList from './BasketList.styles';

import BasketListElement from 'components/molecules/BasketListElement/BasketListElement';
import { connect } from 'react-redux';

const BasketList = ({ basket }) => {
  const { unique } = basket;

  return (
    <StyledBasketList>
      {unique.map(({ prod_id, prod_name, prod_author, prod_price, prod_img_url, prod_quantity, prod_value }, i) => {
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
  basket: state.basket,
});

export default connect(mapStateToProps)(BasketList);
