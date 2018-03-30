// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/SP/base.scss'
import '../node_modules/highlight.js/styles/github-gist.css'

import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
