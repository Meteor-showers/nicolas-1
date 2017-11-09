import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace-museum/Palace'
import Pic from '@/pages/palace-museum/Pic'
import Header from '@/pages/palace-museum/Header'
import List from '@/pages/list/List'
<<<<<<< HEAD
import Bobparr from '@/pages/Bobparr/Bobparr'

=======
import Tourism from '@/pages/tourism/Tourism'
import Order from '@/pages/order-information/Order'
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903

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
<<<<<<< HEAD
   
   {
      path: '/Bobparr',
      name: 'Bobparr',
      component: Bobparr
=======
   {
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
   },
    {
      path: '/order-information',
      name: 'Order',
      component: Order
>>>>>>> b599ab63a8fdc0c65a7db68cd7133ec9b6d71903
    }
  ]
})
