import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'

import axios from "axios"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
