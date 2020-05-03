import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
