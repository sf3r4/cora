import { combineReducers } from 'redux';
import { AppReducer } from './App/App.reducer';
import { SignInReducer } from './pages/SignIn/SignIn.reducer';

const reducers = {
  App: AppReducer,
  SignIn: SignInReducer
};

export default combineReducers(reducers);
