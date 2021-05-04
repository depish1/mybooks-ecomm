import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import store from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
