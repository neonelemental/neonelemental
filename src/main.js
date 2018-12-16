import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylesheets/app.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faLightbulb, faBars, faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMoon, faLightbulb, faBars, faTimes, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
