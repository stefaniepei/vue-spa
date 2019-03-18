import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from '../pc/PCApp'
import MobileApp from './mobile/MobileApp'

import store from './stores'

import './assets/css/reset.min.css'
Vue.use(ElementUI)

const isPc = Utils.checkIsPc()

if(isPc) {
  new Vue({
    el: '#root',
    components: { App },
    template: '<App/>',
    store
  })
} else {
  new Vue({
    el: '#root',
    components: { MobileApp },
    template: '<MobileApp/>',
    store
  })
}