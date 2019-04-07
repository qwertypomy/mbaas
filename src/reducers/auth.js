import { createReducers } from 'redux-arc';
import { types } from '../actions/auth';

const INITIAL_STATE = {
  user: null,
  authorized: false,

  loginLoading: false,
  loginError: null,

  signupLoading: false,
  signupError: null,
  signedup: false,

  logutLoading: false,
  logoutError: null,

  restorePasswordLoading: false,
  restorePasswordError: false,
  restorePasswordEmailSent: false
};

const onLoginRequest = state => ({
  ...state,
  loginLoading: true,
  loginError: INITIAL_STATE.loginError
});

const onLoginResponse = (state, action) =>
  action.error
    ? {
        ...state,
        loginLoading: INITIAL_STATE.loginLoading,
        loginError: action.payload
      }
    : {
        ...state,
        loginLoading: INITIAL_STATE.loginLoading,
        user: action.payload,
        authorized: true
      };

const onSignupRequest = state => ({
  ...state,
  signupLoading: true,
  signupError: INITIAL_STATE.signupError
});

const onSignupResponse = (state, action) =>
  action.error
    ? {
        ...state,
        signupLoading: INITIAL_STATE.signupLoading,
        signupError: action.payload
      }
    : {
        ...state,
        signupLoading: INITIAL_STATE.signupLoading,
        user: action.payload,
        signedup: true
      };

const onLogoutRequest = state => ({
  ...INITIAL_STATE,
  logoutLoading: true
});

const onLogoutResponse = (state, action) =>
  action.error
    ? {
        ...state,
        logoutLoading: INITIAL_STATE.logoutLoading,
        logoutError: action.payload
      }
    : {
        ...state,
        logoutLoading: INITIAL_STATE.logoutLoading
      };

const onRestorePasswordRequest = state => ({
  ...state,
  restorePasswordLoading: true,
  restorePasswordError: INITIAL_STATE.restorePasswordError
});

const onRestorePasswordResponse = (state, action) =>
  action.error
    ? {
        ...state,
        restorePasswordLoading: INITIAL_STATE.restorePasswordLoading,
        restorePasswordError: action.payload
      }
    : {
        ...state,
        restorePasswordLoading: INITIAL_STATE.restorePasswordLoading,
        restorePasswordEmailSent: true
      };

const HANDLERS = {
  /*** ASYNC ACTIONS ***/
  [types.LOGIN.REQUEST]: onLoginRequest,
  [types.LOGIN.RESPONSE]: onLoginResponse,

  [types.SIGNUP.REQUEST]: onSignupRequest,
  [types.SIGNUP.RESPONSE]: onSignupResponse,

  [types.LOGOUT.REQUEST]: onLogoutRequest,
  [types.LOGOUT.RESPONSE]: onLogoutResponse,

  [types.RESTORE_PASSWORD.REQUEST]: onRestorePasswordRequest,
  [types.RESTORE_PASSWORD.RESPONSE]: onRestorePasswordResponse
};

export default createReducers(INITIAL_STATE, HANDLERS);
