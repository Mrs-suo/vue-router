# koa2  npm i koa-generator -g
# koa2 project-name
# cd project-name
# npm install 
# npm i koa2-cors -S  ---控制跨域使用 --跨域插件cors
# npm run serve

# 路由权限
- 1.uid -> 获取用户的uid -> 拿着uid请求路由权限的API
- 2.JSON -> 根据路由权限的API获取数据 -> 转化树形数据结构(树形结构由前端去转化,后端负责将数据返回,根据pid去组成对应的属性结构)
- 3.数据化结构 -> 转变为vue的动态路由结构
- 4.动态路由结构 -> 将动态路由结构添加进去静态的路由结构
- 5.根据路由结构数据做菜单组件