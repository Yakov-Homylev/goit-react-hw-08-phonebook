export const getUserEmail = state => state.authorization.user.email;

export const getUserLogin = state => state.authorization.isLogin;

export const getErrorMessage = state => state.authorization.errorMessage;

export const getLoadingStatus = state => state.authorization.isLoading;

export const getUserToken = state => state.authorization.token;
