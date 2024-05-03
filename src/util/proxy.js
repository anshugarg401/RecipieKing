const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:  "https://recipes.eerieemu.com",
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  );
};