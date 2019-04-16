import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  // 当前页路由信息配置项
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "登录",
    }
  };

  // 登录
  login = async () => {
    await AsyncStorage.setItem('token', '12345')
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this.login} title="登入" />
      </View>
    );
  }
}

export default Login;