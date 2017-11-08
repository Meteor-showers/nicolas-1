import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace-museum/Palace'
import Pic from '@/pages/palace-museum/Pic'
import Header from '@/pages/palace-museum/Header'
import List from '@/pages/list/List'
<<<<<<< HEAD
import Tourism from '@/pages/tourism/Tourism'
=======
import Order from '@/pages/order-information/Order'
>>>>>>> 3f0ae906b9af9e3d4760d0ad1dcef71b8da4b40e

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
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
    }
=======
    {
      path: '/order-information',
      name: 'Order',
      component: Order
    },
>>>>>>> 3f0ae906b9af9e3d4760d0ad1dcef71b8da4b40e
  ]
})
