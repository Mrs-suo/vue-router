const router = require('koa-router')()
// 所有的用户
const users = require("../data/user");
// 所有的路由
const routers = require("../data/router");

router.post('/user_router_auth', async (ctx, next) => {
  // 获取前端传递过来的uid
  const { uid } = ctx.request.body;
  if (uid) {
    let routerAuth = [];
    // 取出当前用户的权限路由表
    const userInfo = users.filter(user => user.id == uid)[0];
    userInfo.auth.map(rid => {
      routers.map(user => {
        if (user.id === rid) {
          routerAuth.push(user);
        }
      })
    })
    ctx.body = routerAuth;
  } else {
    next();
  }

})

module.exports = router
