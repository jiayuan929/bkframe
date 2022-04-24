module.exports = (app) => {
  app.use(require('cookie-parser')());
  /** mock 接口 */
  app.get('/api/table', (req, res) => {
    res.json({
      code: 0,
      message: '',
      data: {
        list: [
          {
            id: 1,
            ip: '127.0.0.1',
            source: '微信',
            status: '正常',
            create_time: '2018-05-25 15:02:24',
            children: [],
          },
        ],
      },
    });
  });
  app.use(require('../paas-server/middleware/user'));
};
