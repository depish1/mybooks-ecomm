import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StyledHeaderIcon, { StyledBasketCounter } from './HeaderIcon.styles';
import { ReactComponent as LoginIcon } from 'assets/icons/LoginIcon.svg';
import { ReactComponent as LogoutIcon } from 'assets/icons/LogoutIcon.svg';
import { ReactComponent as BasketIcon } from 'assets/icons/BasketIcon.svg';
import { ReactComponent as ArrowIcon } from 'assets/icons/ArrowIcon.svg';
import { ReactComponent as RegistrationIcon } from 'assets/icons/RegistrationIcon.svg';
import { ReactComponent as AccIcon } from 'assets/icons/AccIcon.svg';

const HeaderIcon = ({ isBasket, basket, to }) => {
  let iconToRender;
  switch (to) {
    case '/basket':
      iconToRender = <BasketIcon className="icon" />;
      break;
    case '/products':
      iconToRender = <ArrowIcon className="icon" />;
      break;
    case '/signin':
      iconToRender = <LoginIcon className="icon" />;
      break;
    case '/signup':
      iconToRender = <RegistrationIcon className="icon" />;
      break;
    case '/account':
      iconToRender = <AccIcon className="icon" />;
      break;
    default:
      iconToRender = <LogoutIcon className="icon" />;
  }

  return (
    <StyledHeaderIcon>
      {iconToRender}
      {isBasket ? <StyledBasketCounter>{basket.list?.length || 0}</StyledBasketCounter> : null}
    </StyledHeaderIcon>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
});

HeaderIcon.propTypes = {
  isBasket: PropTypes.bool,
  to: PropTypes.string,
  basket: PropTypes.shape({
    list: PropTypes.arrayOf(
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
    unique: PropTypes.arrayOf(
      PropTypes.shape({
        prod_author: PropTypes.string.isRequired,
        prod_category: PropTypes.string.isRequired,
        prod_id: PropTypes.string.isRequired,
        prod_img_url: PropTypes.string.isRequired,
        prod_name: PropTypes.string.isRequired,
        prod_price: PropTypes.string.isRequired,
        prod_value: PropTypes.string.isRequired,
        prod_year: PropTypes.string.isRequired,
        prod_quantity: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};

export default connect(mapStateToProps)(HeaderIcon);
