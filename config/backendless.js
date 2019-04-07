import { Platform } from 'react-native';
import Backendless from 'backendless';
import 'backendless-react-native';

const APP_ID = 'B17B73CF-BF02-64F7-FFF1-F848B2D1A400';

const APP_KEY = Platform.select({
  ios: 'EF7D54F3-0D54-B262-FF50-980A1C0ADE00',
  android: 'F5CF28E7-5B9B-A683-FFEA-D6DA8AABA700'
});

Backendless.initApp(APP_ID, APP_KEY);

export const apiUrl =
  'https://api.backendless.com/B17B73CF-BF02-64F7-FFF1-F848B2D1A400/39AD7095-0540-B828-FFDF-732A30BCAF00';
