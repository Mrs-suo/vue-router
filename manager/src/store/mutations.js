export default {
  // 设置用户的路由表
  setUserRouterrs(state, routers) {
    state.userRouters = routers;
  },
  // 设置用户是否有权限的事件
  setAuth(state, auth) {
    state.hasAuth = auth;
  }
}