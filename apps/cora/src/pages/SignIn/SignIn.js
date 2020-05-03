import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from './SignIn.actions';
import './SignIn.css';

const SignIn = ({ signIn }) => {
  return (
    <form onSubmit={signIn}>
      <h1>Log in</h1>

      <div>
        <label>Username</label>
        <input name="username" type="text" placeholder="Username" />
      </div>

      <div>
        <label>Password</label>
        <input name="password" type="password" placeholder="Password" />
      </div>

      <div>
        <input name="remember" type="checkbox" />
        <label>Remember me</label>
      </div>

      <div>
        <a href="/forgot">Forgot password</a> <a href="/sign-up">Sign up</a>
      </div>

      <div>
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = { signIn };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
