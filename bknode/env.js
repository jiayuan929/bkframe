const config = {
  production: {
    NODE_ENV: JSON.stringify('production'),
    AJAX_URL_PREFIX: JSON.stringify(''),
    USER_INFO_URL: JSON.stringify('/api/user'),
    assetsPublicPath: '{{BK_STATIC_URL}}',
  },
  development: {
    NODE_ENV: JSON.stringify('development'),
    AJAX_URL_PREFIX: JSON.stringify('api/'),
    USER_INFO_URL: JSON.stringify('/api/user'),
    assetsPublicPath: '/',
    HOST: '',
  },
  stag: {
    NODE_ENV: JSON.stringify('production'),
    AJAX_URL_PREFIX: JSON.stringify(''),
    USER_INFO_URL: JSON.stringify('/api/user'),
    assetsPublicPath: '{{BK_STATIC_URL}}',
  },
};

module.exports = () => {
  if (process.env.BK_NODE_ENV === 'development') {
    // dev 环境 登录配置地址
    process.env.BK_LOGIN_URL = '';
    return config.development;
  }
  if (process.env.BK_NODE_ENV === 'stag') {
    return config.stag;
  }
  return config.production;
};
