import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { SettingContainer } from '../../router/navigator'

class Settings extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "设置",
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Text>Personal Info..</Text>
        <Button
          title="Go to AboutUs"
          onPress={() => this.props.navigation.navigate('AboutUs')}
        />
      </View>
    );
  }
}

export default Settings;