// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from "./router";

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.prototype.BASE_URL = 'http://localhost:3000/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
