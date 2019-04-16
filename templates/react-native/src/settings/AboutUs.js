import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class AboutUs extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "关于我们",
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>关于我们</Text>
      </View>
    );
  }
}

export default AboutUs;