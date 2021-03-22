import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { generateRouer } from "@/utils"
import "@/assets/css/common.css"
Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    // 等待当前事件执行完毕
    await store.dispatch('setUserRouters');
    // 执行事件,获取路由
    const newRouters = generateRouer(store.state.userRouters);
    router.addRoutes(newRouters);
    next({
      path:to.path
    })
  } else {
    next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
