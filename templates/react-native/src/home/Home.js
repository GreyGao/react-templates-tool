import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
  // 当前页路由信息配置项
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  };

  // 登出
  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={{ position: 'absolute', top: 0, }}>
          <Text>--------我在顶部--------</Text>
        </SafeAreaView>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
        {/* iPhoneX等设备的适配，可以使用SafeAreaView来进行头部和底部区域的判断，自动处理 */}
        <SafeAreaView style={{ position: 'absolute', bottom: 0, }}>
          <Button title="登出" onPress ={this.logout} />
          <Text>--------我在底部--------</Text>
        </SafeAreaView>
      </View>
    );
  }
}

export default HomeScreen;