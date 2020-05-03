import React, { useState } from 'react';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  withRouter
} from 'react-router-dom';
import classnames from 'classnames';
import SignIn from '../pages/SignIn';
import List from '../pages/List';
import Home from '../pages/Home';
import './App.css';

const currentYear = new Date().getFullYear();
const topMenuItems = [
  {
    key: 'home',
    title: 'Home',
    url: '/'
  },
  {
    key: 'sign-in',
    title: 'Sign in',
    url: '/sign-in'
  },
  {
    key: 'list',
    title: 'List',
    url: '/list'
  }
];

const App = () => {
  let history = useHistory();
  let location = useLocation();
  const key = `${location.pathname}`.split('/')[1];
  const [isShowMobile, setShowMobile] = useState(false);

  return (
    <div>
      <ul>
        {topMenuItems.map(item => (
          <li key={item.key} onClick={() => history.push(item.url)}>
            {item.title}
          </li>
        ))}
      </ul>
      <div>
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
