import StyledUserTransaction from './UserTransaction.styles';

const UserTransaction = ({ transaction: { calendarDate, delivery, payment, products } }) => {
  console.log(products);
  products.reduce((prev, curr) => {
    console.log(prev.prod_quantity + curr.prod_quantity);
    return prev.prod_quantity + curr.prod_quantity;
  });

  return (
    <StyledUserTransaction>
      <div className="transhead">
        <div className="transhead__top">
          <p>
            <span className="header">Data</span>
            <span className="data">{calendarDate}</span>
          </p>
          <p>
            <span className="header">Liczba produktów</span>
            <span className="data">{products.reduce((prev, curr) => prev.prod_quantity + curr.prod_quantity)}</span>
          </p>
        </div>
      </div>
      <ul className="translines">
        <li className="transline"></li>
      </ul>
    </StyledUserTransaction>
  );
};

export default UserTransaction;
