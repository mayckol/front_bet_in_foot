import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/Main'
import Login from "@/pages/Login"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ],
  mode: 'history'
})
