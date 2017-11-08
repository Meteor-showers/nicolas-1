import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace-museum/Palace'
import Pic from '@/pages/palace-museum/Pic'
import Header from '@/pages/palace-museum/Header'
import List from '@/pages/list/List'
import Order from '@/pages/order-information/Order'

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
      path: '/palace-museum/Pic',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/palace-museum',
      name: 'Palace',
      component: Palace
    },
    {
      path: '/order-information',
      name: 'Order',
      component: Order
    },
  ]
})
