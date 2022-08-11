const INITIAL_STATE = {
  auth: {
    token: '',
    isLogged: false,
    isLoading: true
  }
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      auth: {
        token: action.token,
        isLogged: true,
        isLoading: false
      }
    }
  }
  if (action.type === 'SET_LOGOUT') {
    return {
      ...state,
      auth: {
        token: '',
        isLogged: false
      }
    }
  }
  if (action.type === 'SET_CREATE_LOGIN') {
    return {
      ...state,
      auth: {
        token: '',
        isLogged: false
      }
    }
  }
  return state
}

export default AuthReducer;
