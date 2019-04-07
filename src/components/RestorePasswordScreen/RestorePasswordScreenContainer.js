import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';

import { creators } from '../../actions/auth';

import RestorePasswordScreenView from './RestorePasswordScreenView';

class RestorePasswordScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Forgot password',
    headerRight: (
      <Button onPress={() => navigation.navigate('Signup')} style={{ height: '100%' }} transparent>
        <Text>Signup</Text>
      </Button>
    )
  });

  state = {
    login: ''
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.restorePasswordEmailSent) {
      this.props.navigation.navigate('Login', {
        message: 'A password restore link has been sent to your e-mail address'
      });
    }
  }

  handleInputChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  handleRestorePassword = () => {
    this.props.restorePassword(null, this.state);
  };

  render() {
    const { loading, error } = this.props;

    const { login } = this.state;
    return (
      <RestorePasswordScreenView
        login={login}
        onInputChange={this.handleInputChange}
        onSubmit={this.handleRestorePassword}
        loading={loading}
        error={error}
      />
    );
  }
}

function mapStateToProps({
  auth: { restorePasswordLoading, restorePasswordError, restorePasswordEmailSent }
}) {
  return {
    loading: restorePasswordLoading,
    error: restorePasswordError,
    restorePasswordEmailSent
  };
}

export default connect(
  mapStateToProps,
  { restorePassword: creators.restorePassword }
)(RestorePasswordScreenContainer);
