import Vue from 'vue'
import './assets/css/reset.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
import App from '../pc/PCApp'
import MobileApp from './mobile/MobileApp'
import store from './stores'

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