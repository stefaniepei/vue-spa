export default {
  state: {
    token: '',
    imConfig: { businessCode:'', appCustId:'', mobile:'', nickName:'' }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_CONFIG(state, config) {
      state.imConfig = config
    },
  },
  actions: {
    SET_IM_CONFIG(context, config) {
      context.commit('SET_CONFIG', config)
      console.log('set Config OK!', config)
    },
  }
}
