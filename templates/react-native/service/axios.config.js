import axios from 'axios';
import api from './api.config';
import AsyncStorage from '@react-native-community/async-storage';

const tokenManager = {
  token: '',
  errorMap: {
    10005: 'token为空',
    1006: 'token失效',
    10006: 'token过期',
  },
  getToken(token) {
    this.token = token;
  }
}

class LocalAxios {
  constructor(options) {
    this.options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // token: localStorage.getItem('token'),
        token: tokenManager.token,
      },
      method: 'POST', // 默认 POST
      url: '',
      data: '',
      ...options,
    };
    this.options.url = `${api.baseUrl}${this.options.url}`;
    // 增加默认参数 locale
    this.options.params = {
      ...options.params,
    };
    this.$axios = axios;
  }

  // 使用JSON格式发送数据
  postAsJSON() {
    this.options.headers['Content-Type'] = 'application/json';
    return this;
  }

  // 使用form-data格式发送数据
  postAsFormData() {
    this.options.headers['Content-Type'] = 'multipart/form-data';
    return this;
  }

  // 直接返回原始response
  async getRes() {
    try {
      const res = await this.$axios(this.options);
      return res;
    } catch (e) {
      console.log(e)
    }
  }

  // 经过处理的response
  async handleRes(navigation) {
    const res = await this.getRes();
    console.log(res.data.code)
    if (tokenManager.errorMap[res.data.code]) {
      // token 无效、为空、过期，清除token, 返回登录页
      await AsyncStorage.removeItem('token');
      if (navigation) {
        navigation.navigate('Login')
      }
      return;
    }
    return res;
  }
}

export default function setAxios(options) {
  return new LocalAxios(options)
}

export {
  tokenManager
}