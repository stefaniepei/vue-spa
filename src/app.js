import Vue from 'vue'
import './assets/css/reset.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui'
import PCApp from './pc/index.vue'
import MobileApp from './mobile/index.vue'
import store from './stores'
import ValidateUtils from './utils/validateUtils'

Vue.use(ElementUI)

if(ValidateUtils.isMobile()) {
  new Vue({
    el: '#root',
    components: { MobileApp },
    template: '<MobileApp/>',
    store
  })
} else {
  new Vue({
    el: '#root',
    components: { PCApp },
    template: '<PCApp/>',
    store
  })
}