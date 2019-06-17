import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Calculator from './views/Calculator.vue'
import My from './views/My.vue'
import Articles from './views/Articles.vue'
import Log from './views/Log.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: Calculator
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/log',
      name: 'log',
      component: Log
    }
  ]
})
