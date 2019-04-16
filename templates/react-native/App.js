/**
 * React Native 基础项目脚手架
 * written by GreyGao 2019.04.01
 * Libraries List:
 *  - react-native-navigation
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './router/navigator'
import NavigationService from './router/navigationService'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, }}>
        <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef)}} />
      </View>
    );
  }
}

export default App