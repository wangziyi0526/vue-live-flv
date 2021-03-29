import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);

var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./components/warp'),
      children: [
        {
          meta: {
            title: '首页',
          },
          path: '/',
          component: () => import('./components/hello')
        },
        {
          meta: {
            title: '数字页',
          },
          path: '/home',
          component: () => import('./components/number')
        },
        {

          meta: {
            title: '音乐',
          },
          path: '/music',
          component: () => import('./components/music')
        }
      ]
    }
  ],
})
router.beforeEach((to, from, next) => {
  let isHave = null;
  for (var i = 0; i < store.state.routerArray.length; i++) {
    if (store.state.routerArray[i].path == to.path) {
      isHave = true
    }
  }
  if (isHave) {
    store.commit('CHANGE_ROUTERTITLE', to.meta.title)
    next();
  } else {
    let data = {
      path: to.path,
      title: to.meta.title
    }
    store.commit("PUSH_ROUTER", data)
    store.commit('CHANGE_ROUTERTITLE', to.meta.title)
    next()
  }

})
export default router;

