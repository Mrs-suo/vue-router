function formMatRouterTree(data) {
  let parents = data.filter(item => item.pid === 0),
    children = data.filter(item => item.pid !== 0);
  dataTree(parents, children)
  function dataTree(parents, children) {
    parents.map(par => {
      children.map((child, index) => {
        if (child.pid === par.id) {
          // 深拷贝一份数据
          let _children = JSON.parse(JSON.stringify(children));
          _children.splice(index, 1);
          dataTree([child], _children);

          if (par.children) {
            par.children.push(child);
          } else {
            par.children = [child];
          }

        }
      })
    })
  }

  return parents;
}
// 设置动态路由事件
function generateRouer(UserRouters) {
  let newRouters = UserRouters.map((router) => {
    let routes = {
      path: router.path,
      name: router.name,
      component: () => import(`@/views/${router.name}`)
    }
    if (router.children) {
      routes.children = generateRouer(router.children);
    }
    return routes;
  })

  return newRouters;
}

export {
  formMatRouterTree,
  generateRouer
}