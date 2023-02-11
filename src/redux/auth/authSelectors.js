export const selectUserName = state => {
  return state.auth.user.name;
};
export const selectUserEmail = state => {
  return state.auth.user.email;
};
export const selectToken = state => {
  console.log(state.auth.token);
  return state.auth.token;
};
export const selectIsLoading = state => {
  return state.auth.isLoading;
};
export const selectError = state => {
  return state.auth.error;
};
export const selectIsFetchingCurrentUser = state => {
  // console.log(state.auth.isFetching);
  return state.auth.isFetching;
};
export const selectIsLoggedIn = state => {
  console.log(state.auth.isLoggedIn);
  return state.auth.isLoggedIn;
};
