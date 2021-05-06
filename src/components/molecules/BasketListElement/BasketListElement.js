import StyledBasketListElement from './BasketListElement.styles';
import BasketDeleteButton from 'components/atoms/BasketDeleteButton/BasketDeleteButton';

const BasketListElement = ({ prod_id, prod_name, prod_author, prod_price, prod_img_url, prod_quantity, lp }) => {
  return (
    <StyledBasketListElement>
      <div>{lp}</div>
      <div class="center">
        <img src={prod_img_url} alt="product" />
      </div>
      <div className="name">
        <h3>{prod_name}</h3>
        <span>{prod_author}</span>
      </div>

      <div class="center">{prod_price} zł</div>
      <div class="center">{prod_quantity}</div>
      <div class="center">{(parseFloat(prod_price) * prod_quantity).toFixed(2)} zł</div>

      <div class="center">
        {/* {prod_id} */}
        <BasketDeleteButton id={prod_id} />
      </div>
    </StyledBasketListElement>
  );
};

export default BasketListElement;
