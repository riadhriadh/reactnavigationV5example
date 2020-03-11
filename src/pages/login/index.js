import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          this.props.navigation.navigate("Register");
        }}
      />
      </View>
    );
  }
}
