import { useState } from 'react';
import StyledUserTransaction from './UserTransaction.styles';

const UserTransaction = ({ transaction: { calendarDate, delivery, payment, products } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
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
      <ul className={(isOpen ? 'open' : null) + ' translines'}>
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

export default UserTransaction;
