

export default api = {
  baseUrl: 'http://localhost:3000',

  // other api...
  userInfo: '/webapi/user/queryUserInfo', // 获取用户信息
}

const prodEnv = {
  webApi: 'https://owl.abcpen.com'
};

const devEnv = {
  webApi: 'http://ai.abcpen.com',
};

if (process.env.NODE_ENV === 'production') {
  api.baseUrl = prodEnv.webApi;
} else {
  api.baseUrl = devEnv.webApi;
}