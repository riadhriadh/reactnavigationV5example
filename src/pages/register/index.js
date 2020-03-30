import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
          <Button
        title="go to register"
        onPress={() => {
          this.props.navigation.toggleDrawer();
        }}
      />
      </View>
    );
  }
}
