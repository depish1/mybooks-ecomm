import { useState } from 'react';
import StyledUserTransaction from './UserTransaction.styles';
import PropTypes from 'prop-types';

const UserTransaction = ({ transaction: { calendarDate, delivery, payment, products } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <StyledUserTransaction>
      <div className="transhead" onClick={handleClick}>
        <div className="transhead__top">
          <p>
            <span className="header">Data</span>
            <span className="data">{calendarDate}</span>
          </p>

          <p>
            <span className="header">Cena</span>
            <span className="data">
              {products
                .reduce((prev, curr) => {
                  return prev + parseFloat(curr.prod_price);
                }, 0)
                .toFixed(2)}{' '}
              zł
            </span>
          </p>
        </div>
        <div className="transhead__bottom">
          <p>
            <span className="header">Sposób dostawy</span>
            <span className="data">{delivery}</span>
          </p>
          <p>
            <span className="header">Sposób płatności</span>
            <span className="data">{payment}</span>
          </p>
        </div>
      </div>
      <ul className={`${isOpen ? 'open' : null} translines`}>
        {products.map((product) => (
          <li key={product.prod_id} className="transline">
            <div className="transline__top">
              <p>
                <span className="header">Nazwa</span>
                <span className="data">{product.prod_name}</span>
              </p>
              <p>
                <span className="header">Cena</span>
                <span className="data">{product.prod_price} zł</span>
              </p>
            </div>
            <div className="transline__bottom">
              <p>
                <span className="header">Ilość</span>
                <span className="data">{product.prod_quantity ?? '--'}</span>
              </p>
              <p>
                <span className="header">Wartość</span>
                <span className="data">{product.prod_value} zł</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </StyledUserTransaction>
  );
};

UserTransaction.propTypes = {
  transaction: PropTypes.shape({
    calendarDate: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
    payment: PropTypes.string.isRequired,
    trans_id: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        prod_author: PropTypes.string,
        prod_id: PropTypes.string.isRequired,
        prod_img_url: PropTypes.string,
        prod_name: PropTypes.string.isRequired,
        prod_price: PropTypes.string.isRequired,
        prod_value: PropTypes.string.isRequired,
        prod_quantity: PropTypes.number,
      })
    ),
    adress: PropTypes.shape({
      city: PropTypes.string.isRequired,
      flatNumber: PropTypes.string.isRequired,
      houseNumber: PropTypes.number.isRequired,
      street: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    }),
  }),
};

export default UserTransaction;
