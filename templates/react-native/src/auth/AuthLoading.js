import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { localAxios, api, tokenManager } from '../../service'
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem('token');

    console.log('token === ', userToken)
    if (userToken) {
      tokenManager.getToken(userToken);
      // 可进行getUserInfo等操作, 验证token是否有效, 

      const userInfo = await localAxios({
        url: api.userInfo
      }).handleRes(navigation);
      navigation.navigate(userInfo ? 'Main' : 'Auth');
    } else {
      navigation.navigate('Auth');
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading