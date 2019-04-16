// 路由列表配置项

import { Home, Details } from '../src/home'
import { Settings, AboutUs } from '../src/settings'
import { AuthLoading, Login } from '../src/auth'

const mainRoutes = {
  Home,
  Details,
  Settings,
  AboutUs,
}

const authRoutes = {
  AuthLoading,
}

const loginRoutes = {
  Login,
  // SignIn 
}

export {
  mainRoutes,
  authRoutes,
  loginRoutes,
}