import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from './SignIn.actions';

const initialState = {
  isLoadingSignIn: false,
  token: '',
  signInError: ''
};

export function SignInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoadingSignIn: true
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoadingSignIn: false,
        token: action.payload.content
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        isLoadingSignIn: false,
        signInError: 'action.payload'
      };

    default:
      return state;
  }
}
