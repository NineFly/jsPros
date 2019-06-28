import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router(
  {
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          keepAlive: false,
          showTabBar: true,
          title: '首页'
        }
      },
      {
        path: "/first",
        name: "first",
        component: () => import("@/views/First.vue"),
        meta: {
          keepAlive: false,
          showTabBar: true,
          title: '第一个Vue'
        }
      },
      {
        path: "/add_stu",
        name: "add_stu",
        component: () => import("@/views/AddStudent.vue"),
        meta: {
          keepAlive: false,
          showTabBar: true,
          title: '添加学生'
        }
      },
      // {
      //   path:'/error_no_auth',
      //   name:'error_no_auth',
      //   component:()=> import("@/views/errorNoAuth.vue"),
      //   meta:{
      //     title: '没有权限'
      //   }
      // }
    ]
  }
)
router.beforeEach(function (to, from, next) {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  if (toDepth < fromDepth) { // 前进刷新后退不刷新
    from.meta.keepAlive = false
    to.meta.keepAlive = false
  }
  next()
});

router.afterEach(function (to) {
  // store.commit('UPDATE_LOADING_STATUS', {isLoading: false})
})

export default router
