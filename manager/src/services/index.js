import axios from "axios";
import qs from "qs";

// 获取用户的router路由表
function getUserRouters(uid) {
  return axios({
    url: "http://localhost:3000/user_router_auth",
    method: "post",
    header: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({ uid })
  })
  .then(res => {
    return res.data
  })
  .catch(error => {
    throw error;
  })
}
export {
  getUserRouters
}