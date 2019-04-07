import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'native-base';

import { creators } from '../../actions/auth';

import HomeScreenView from './HomeScreenView';

class HomeScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={navigation.getParam('onLogout', () => null)}
        style={{ height: '100%' }}
        transparent
      >
        <Text>Logout</Text>
      </Button>
    )
  });

  componentDidMount() {
    this.props.navigation.setParams({ onLogout: this.onLogout });
  }

  onLogout = () => {
    this.props.logout();
    this.props.navigation.navigate('Login');
  };

  render() {
    return <HomeScreenView />;
  }
}

export default connect(
  null,
  { logout: creators.logout }
)(HomeScreenContainer);
