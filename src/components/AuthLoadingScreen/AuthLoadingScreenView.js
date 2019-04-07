import React, { Component } from 'react';
import { Container, Spinner } from 'native-base';
import { getInternetCredentials } from 'react-native-keychain';
import { apiUrl } from '../../../config';

class AuthLoadingScreenView extends Component {
  componentDidMount() {
    this.loadCredentials();
  }

  loadCredentials() {
    getInternetCredentials(apiUrl).then(credentials => {
      if (credentials) {
        console.log(`Credentials successfully loaded for user ${credentials.username}`);
        this.props.navigation.navigate('App');
      } else {
        console.log('No credentials stored');
        this.props.navigation.navigate('Auth');
      }
    });
  }

  render() {
    return (
      <Container style={{ justifyContent: 'center', alignContent: 'center' }}>
        <Spinner />
      </Container>
    );
  }
}

export default AuthLoadingScreenView;
