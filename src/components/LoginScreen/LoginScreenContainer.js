import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';

import { creators } from '../../actions/auth';

import LoginScreenView from './LoginScreenView';

class LoginScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
    headerRight: (
      <Button onPress={() => navigation.navigate('Signup')} style={{ height: '100%' }} transparent>
        <Text>Signup</Text>
      </Button>
    )
  });

  state = {
    login: '',
    password: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.authorized) {
      this.props.navigation.navigate('App');
    }
  }

  handleInputChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  handleRestorePasswordButtonPress = () => {
    this.props.navigation.navigate('RestorePassword');
  };

  handleLogin = () => {
    this.props.login(this.state);
  };

  render() {
    const { loading, error } = this.props;
    const { login, password } = this.state;
    const message = this.props.navigation.getParam('message', '');

    return (
      <LoginScreenView
        login={login}
        password={password}
        onInputChange={this.handleInputChange}
        onSubmit={this.handleLogin}
        onRestorePasswordButtonPress={this.handleRestorePasswordButtonPress}
        loading={loading}
        error={error}
        message={message}
      />
    );
  }
}

function mapStateToProps({ auth: { loginLoading, loginError, authorized } }) {
  return {
    loading: loginLoading,
    error: loginError,
    authorized
  };
}

export default connect(
  mapStateToProps,
  { login: creators.login }
)(LoginScreenContainer);
