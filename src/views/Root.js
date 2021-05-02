import GlobalStyle from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Header from 'components/organisms/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from 'components/organisms/Products/Products';
import Login from 'components/organisms/Login/Login';
import Basket from 'components/organisms/Basket/Basket';
import Registration from 'components/organisms/Registration/Registration';

const Container = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route path={['/', '/products']}>
              <Products />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
