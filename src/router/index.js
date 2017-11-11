import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Palace from '@/pages/palace-museum/Palace'
import Pic from '@/pages/palace-museum/Pic'
import Header from '@/pages/palace-museum/Header'
import List from '@/pages/list/List'

import City from '@/pages/city/City'
import Tourism from '@/pages/tourism/Tourism'
import Order from '@/pages/order-information/Order'
import oneDay from '@/pages/oneDay/oneDay'


import Bobparr from '@/pages/Bobparr/Bobparr'


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
      path: '/city',
      name: 'city',
      component: City
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
      path: '/Bobparr',
      name: 'Bobparr',
      component: Bobparr
    },

   {
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
   },
    {
      path: '/order-information',
      name: 'Order',
      component: Order

    },
     {
      path: '/oneDay',
      name: 'oneDay',
      component: oneDay

    }
  ]
})
