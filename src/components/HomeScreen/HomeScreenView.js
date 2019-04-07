import React, { Component } from 'react';
import { Container, Text } from 'native-base';

class HomeScreenView extends Component {
  render() {
    return (
      <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Home Screen</Text>
      </Container>
    );
  }
}

export default HomeScreenView;
