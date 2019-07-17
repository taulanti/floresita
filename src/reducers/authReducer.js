import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../store/auth.js';


const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return { ...state, error: null, loading: true };
}

const authSuccess = (state, action) => {
  console.log('action: '+action);
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
    hasUserSignedUp: action.hasUserSignedUp,
    email: action.email
  };
}

const authFail = (state, action) => {
  return { ...state, error: action.error, loading: false };
}

const authLogout = (state, action) => {
  return { ...state, token: null, userId: null, loading: false, hasUserSignedUp: action.hasUserSignedUp };
}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: return authStart(state, action)
    case AUTH_SUCCESS: return authSuccess(state, action)
    case AUTH_FAIL: return authFail(state, action)
    case AUTH_LOGOUT: return authLogout(state, action)
    default:
      return state;
  }
};

export default authReducer;