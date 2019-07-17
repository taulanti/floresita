import axios from 'axios';

export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SIGNUP = 'AUTH_LOGOUT_SIGNUP';

export const authStart = () => {
  return {
    type: AUTH_START,
  };
};

export const authSuccess = (token, userId, isSignup, email) => {
  return isSignup ? {type: AUTH_SUCCESS, idToken: null, userId: null, hasUserSignedUp: true, email: email } :
    {
      type: AUTH_SUCCESS,
      idToken: token,
      userId: userId,
      hasUserSignedUp: false,
      email: email
    };
};

export const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('exiprationDate');
  localStorage.removeItem('userId');
  return {
    type: AUTH_LOGOUT,
    hasUserSignedUp: false
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime*100);
  }
}


export const auth = (email, password, isSignup) => {
  console.log('inside auth: ' + isSignup);
  return dispatch => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    dispatch(authStart());
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCPOUGM5JVIIrIMfU8WzqAds6rdV6Of_k0';
    if (!isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCPOUGM5JVIIrIMfU8WzqAds6rdV6Of_k0';
      axios.post(url, authData)
        .then(response => {
          console.log(response.data);
          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
          localStorage.setItem('token', response.data.idToken);
          localStorage.setItem('expirationDate', expirationDate)
          localStorage.setItem('userId', response.data.localId);
          dispatch(authSuccess(response.data.idToken, response.data.localId, false, response.data.email));
          dispatch(checkAuthTimeOut(response.data.expiresIn));
        })
        .catch(err => {
          dispatch(authFail(err.response.data.error));
        });
    } else {
      console.log('it is signup');
      axios.post(url, authData)
        .then(response => {
          dispatch(authSuccess(null, null, true));
        })
        .catch(err => {
          dispatch(authFail(err.response.data.error));
        });
    }

  };
};


export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      console.log(`inside authCheckState, token: ${token}`);
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess(token, userId, false));
        dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
      } else {
        dispatch(logout());
      }
    }
  };
};