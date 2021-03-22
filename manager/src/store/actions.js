import { getUserRouters } from "@/services/index"
import { formMatRouterTree } from "@/utils"
export default {
  async setUserRouters({ commit, state }) {
    const userRouters = await getUserRouters(state.uid),
      payLoad = formMatRouterTree(userRouters);
      // 生成权限动态树
    // 将权限树形菜单通过commit的形式添加到vuex中
    commit("setUserRouterrs", payLoad);
    // 将当前用户的是否有权限修改为有权限访问
    commit("setAuth", true);
  }
}