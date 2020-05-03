export const getAuthState = (store) => store.auth;

export const getAuthToken = (store) =>
  getAuthState(store) ? getAuthState(store).token : '';
