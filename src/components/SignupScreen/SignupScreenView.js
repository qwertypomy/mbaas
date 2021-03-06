import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Picker,
  Icon,
  Button,
  Text,
  Spinner,
  Footer,
  FooterTab
} from 'native-base';

import FormValidator from '../../utils/FormValidator';

class SignupScreenView extends Component {
  render() {
    const {
      name,
      email,
      password,
      age,
      gender,
      country,
      onInputChange,
      onSubmit,
      genders,
      countries,
      loading,
      error
    } = this.props;

    const {
      invalidName,
      invalidEmail,
      invalidPassword,
      invalidAge,
      invalidForm
    } = new FormValidator(name, email, password, age);

    return (
      <Container>
        <Content>
          {loading ? (
            <Spinner />
          ) : (
            <Text style={{ minHeight: 80, padding: 15, textAlign: 'center', color: '#cc0000' }}>
              {error}
            </Text>
          )}
          <Form>
            <Item error={invalidName}>
              <Input
                placeholder="Name"
                value={name}
                onChangeText={value => onInputChange('name', value)}
              />
            </Item>
            <Item error={invalidEmail}>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={value => onInputChange('email', value)}
                keyboardType="email-address"
                autoComplete="email"
                textContentType="emailAddress"
              />
            </Item>
            <Item error={invalidPassword}>
              <Input
                placeholder="Password"
                value={password}
                onChangeText={value => onInputChange('password', value)}
                secureTextEntry
              />
            </Item>
            <Item error={invalidAge}>
              <Input
                placeholder="Age"
                value={age ? `${age}` : ''}
                onChangeText={value => onInputChange('age', +value)}
                keyboardType="numeric"
              />
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your gender"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={gender}
                onValueChange={value => onInputChange('gender', value)}
              >
                {genders.map(genderName => (
                  <Picker.Item label={genderName} value={genderName} key={genderName} />
                ))}
              </Picker>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your country"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={country}
                onValueChange={value => onInputChange('country', value)}
              >
                {countries.map(({ name: { common: countryName } }) => (
                  <Picker.Item label={countryName} value={countryName} key={countryName} />
                ))}
              </Picker>
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={onSubmit} disabled={loading || invalidForm}>
              <Text style={{ fontSize: 15 }}>Sign Up</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default SignupScreenView;
