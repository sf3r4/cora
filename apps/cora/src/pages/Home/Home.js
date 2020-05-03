import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();

  return (
    <div>
      <button type="button" onClick={() => history.push('/sign-in')}>
        Log in
      </button>
    </div>
  );
};

export default withRouter(Home);
