import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Text } from 'native-base';

import { creators } from '../../actions/auth';

import SignupScreenView from './SignupScreenView';

import genders from '../../../data/genders.json';
import countries from '../../../data/countries.json';

class SignupScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Signup',
    headerRight: (
      <Button onPress={() => navigation.navigate('Login')} style={{ height: '100%' }} transparent>
        <Text>Login</Text>
      </Button>
    )
  });

  state = {
    name: '',
    email: '',
    password: '',
    age: null,
    gender: 'Man',
    country: 'Ukraine'
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedup) {
      this.props.navigation.navigate('Login', {
        message: 'A confirmation email has been sent to your e-mail address'
      });
    }
  }

  handleInputChange = (fieldName, fieldValue) => {
    this.setState({
      [fieldName]: fieldValue
    });
  };

  handleSignup = () => {
    this.props.signup(this.state);
  };

  render() {
    const { loading, error } = this.props;
    const { name, email, password, age, gender, country } = this.state;
    return (
      <SignupScreenView
        name={name}
        email={email}
        password={password}
        age={age}
        gender={gender}
        country={country}
        onInputChange={this.handleInputChange}
        onSubmit={this.handleSignup}
        genders={genders}
        countries={countries}
        loading={loading}
        error={error}
      />
    );
  }
}

function mapStateToProps({ auth: { signupLoading, signupError, signedup } }) {
  return {
    loading: signupLoading,
    error: signupError,
    signedup
  };
}

export default connect(
  mapStateToProps,
  { signup: creators.signup }
)(SignupScreenContainer);
