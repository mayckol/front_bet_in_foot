import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from "@/components/auth/Login"
import Logout from "@/components/auth/Logout"
import Adm from '@/components/Adm'
import Permissions from '@/components/Permissions'
import RegisterMatches from '@/components/RegisterMatches'

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
      path: '/home-adm',
      name: 'Adm',
      component: Adm,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/permissions',
      name: 'Permissions',
      component: Permissions,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/register-matches',
      name: 'register-matches',
      component: RegisterMatches,
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
