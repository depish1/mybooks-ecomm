import StyledBasketListElement from './BasketListElement.styles';
import BasketDeleteButton from 'components/atoms/BasketDeleteButton/BasketDeleteButton';
import PropTypes from 'prop-types';

const BasketListElement = ({ prod_id, prod_name, prod_author, prod_price, prod_img_url, prod_quantity, prod_value }) => {
  return (
    <StyledBasketListElement>
      <div className="top">
        <div className=" cell">
          <img src={prod_img_url} alt="product" />
        </div>
        <div className="name cell">
          <p className="description">Tytuł / autor</p>
          <h3>{prod_name}</h3>
          <span>{prod_author}</span>
        </div>
      </div>
      <div className="bottom">
        <div className=" cell">
          <p className="description">Cena</p>
          {prod_price} zł
        </div>
        <div className=" cell">
          <p className="description">Ilość</p>
          {prod_quantity}
        </div>
        <div className=" cell">
          <p className="description">Wartość</p>
          {prod_value} zł
        </div>
        <div className=" cell">
          <p className="description">Usuń</p>
          <BasketDeleteButton id={prod_id} />
        </div>
      </div>
    </StyledBasketListElement>
  );
};
BasketListElement.propTypes = {
  prod_author: PropTypes.string.isRequired,
  prod_id: PropTypes.string.isRequired,
  prod_img_url: PropTypes.string.isRequired,
  prod_name: PropTypes.string.isRequired,
  prod_price: PropTypes.string.isRequired,
  prod_value: PropTypes.string.isRequired,
  prod_quantity: PropTypes.number.isRequired,
};

export default BasketListElement;
