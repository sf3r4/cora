export const SIGN_IN_REQUEST = '@@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@@auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = '@@auth/SIGN_IN_FAILURE';

export const signIn = ({ username, password }) => ({
  type: SIGN_IN_REQUEST,
  payload: { username, password }
});
