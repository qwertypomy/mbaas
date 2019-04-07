import { createActions } from 'redux-arc';
import { saveCredentials, resetCredentials } from './middlewares';

export const { types, creators } = createActions('contacts', {
  /*** Async actions ***/
  login: { url: '/users/login', method: 'post', middlewares: [saveCredentials] },
  signup: { url: '/users/register', method: 'post' },
  logout: { url: '/users/logout', method: 'post', middlewares: [resetCredentials] },
  restorePassword: { url: '/users/restorepassword/:login', method: 'get' }
});
