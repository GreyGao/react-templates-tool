import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "详细",
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
export default DetailsScreen;