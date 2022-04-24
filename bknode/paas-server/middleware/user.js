// 获取 OA 登录用户详情
module.exports = async function user(req, res, next) {
  if (req.path !== '/api/user' && req.path !== '/user') {
    next();
    return;
  }
  const request = require('request');
  const loginUrl = process.env.BK_LOGIN_URL;
  const url = `${loginUrl}api/v3/is_login/?bk_token=${req.cookies.bk_token}`;
  request(url, (err, response, body) => {
    if (err) {
      return;
    }
    const data = JSON.parse(body || '{}');

    // 有登录状态
    if (data.code === 0) {
      const {
        bk_username,
        avatar_url,
      } = data.data;
      res.json({
        code: 0,
        message: data.msg,
        data: {
          username: bk_username,
          avatar_url,
        },
      });
      return;
    }
    // 登录状态失效
    // const loginURL = `${BK_LOGIN_URL}plain?`;
    res.status(401);
    // res.set({
    //   'X-Login-Url': loginURL,
    // });
    res.send('');
  });
};
