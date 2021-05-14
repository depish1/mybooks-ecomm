import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Header from 'components/organisms/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from 'components/organisms/Products/Products';
import SignIn from 'components/organisms/SignIn/SignIn';
import Basket from 'components/organisms/Basket/Basket';
import Checkout from 'components/organisms/Checkout/Checkout';
import SignUp from 'components/organisms/SignUp/SignUp';
import Account from 'components/organisms/Account/Account';
import Container from './Root.styles';
import Loader from 'components/organisms/Loader/Loader';
import { connect } from 'react-redux';

const Root = ({ isLoader }) => {
  console.log('isLoader', isLoader);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          {isLoader && <Loader />}
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/basket" component={Basket} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/account" component={Account} />
            <Route exact path={['/', '/products']} component={Products} />
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isLoader: state.loader.isLoader,
});

export default connect(mapStateToProps)(Root);
