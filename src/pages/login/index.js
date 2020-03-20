import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { connect } from "react-redux";
import { getPersistedUserAuth, getOpenMode } from "@actions";
class Login extends Component {
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
        title="go to register"
        onPress={() => {
          this.props.getPersistedUserAuth("helllo");
          this.props.navigation.navigate("Register");
        }}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const auth = state.auth;
  const providers = state.providers;
  return {
    auth,
    providers
  };
};

const mapDispatchToProps = {
  getPersistedUserAuth,
  getOpenMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
