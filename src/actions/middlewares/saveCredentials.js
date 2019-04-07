import { setInternetCredentials } from 'react-native-keychain';
import { apiUrl } from '../../../config';

export function saveCredentials() {
  return done => (action, error, response) => {
    if (response && response['user-token']) {
      setInternetCredentials(apiUrl, response.name, response['user-token']);
    }
    return done(action, error, response);
  };
}
saveCredentials.applyPoint = 'onResponse';
