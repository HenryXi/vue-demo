import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/123',
      name: '123',
      component: 123
    }
  ]
})
