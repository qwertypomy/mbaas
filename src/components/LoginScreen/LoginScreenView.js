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
    const {
      login,
      password,
      onInputChange,
      onSubmit,
      onRestorePasswordButtonPress,
      loading,
      error,
      message
    } = this.props;
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
                color: error ? '#cc0000' : '#62B1F6'
              }}
            >
              {error || message}
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
            <Item>
              <Input
                placeholder="Password"
                value={password}
                onChangeText={value => onInputChange('password', value)}
                secureTextEntry
              />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button info full onPress={onRestorePasswordButtonPress} disabled={loading}>
              <Text style={{ color: 'white', fontSize: 15 }}>Forgot password</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button full onPress={onSubmit} disabled={loading}>
              <Text style={{ color: 'white', fontSize: 15 }}>Login</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default LoginScreenView;
