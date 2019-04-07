import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Spinner,
  Footer,
  FooterTab
} from 'native-base';

class LoginScreenView extends Component {
  render() {
    const { login, onInputChange, onSubmit, loading, error } = this.props;
    return (
      <Container>
        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <Text
              style={{
                minHeight: 80,
                padding: 15,
                textAlign: 'center',
                color: '#cc0000'
              }}
            >
              {error}
            </Text>
          )}
          <Form>
            <Item>
              <Input
                placeholder="Name"
                value={login}
                onChangeText={value => onInputChange('login', value)}
              />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={onSubmit} disabled={loading}>
              <Text style={{ fontSize: 15 }}>Send e-mail</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default LoginScreenView;
