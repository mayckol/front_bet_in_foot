import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from "@/components/auth/Login"
import Logout from "@/components/auth/Logout"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Main',
      component: Main,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
  ],
  mode: 'history'
})
