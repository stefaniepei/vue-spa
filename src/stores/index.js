import Vue from 'vue'
import vuex from 'vuex'
import pcStore from './pcStore'

Vue.use(vuex)
export default new vuex.Store({
  modules: {
    pcStore
  }
})