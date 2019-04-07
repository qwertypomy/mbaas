import { resetInternetCredentials } from 'react-native-keychain';
import { apiUrl } from '../../../config';

export function resetCredentials() {
  return done => (action, error, response) => {
    resetInternetCredentials(apiUrl);
    return done(action, error, response);
  };
}
resetCredentials.applyPoint = 'onRequest';
