import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace-museum/Palace'
import Pic from '@/pages/palace-museum/Pic'
import List from '@/pages/list/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/palace-museum',
      name: 'Palace',
      component: Palace
    },
     {
      path: '/palace-museum/Pic',
      name: 'Pic',
      component: Pic
    }
  ]
})
