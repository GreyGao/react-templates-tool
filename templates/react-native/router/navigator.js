import React from 'react'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { mainRoutes, loginRoutes, authRoutes } from './routes'
import navigationService from './navigationService'

// 路由基础信息配置项
const MainNavigator = createStackNavigator(mainRoutes, {
  // 初始屏
  initialRouteName: "Home",
  // 默认样式
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const AuthNavigator = createStackNavigator(loginRoutes);

const AppNavigator = createSwitchNavigator({
  AuthLoading: authRoutes.AuthLoading,
  Main: MainNavigator,
  Auth: AuthNavigator
},
  {
    initialRouteName: 'AuthLoading',
  }
)

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer
