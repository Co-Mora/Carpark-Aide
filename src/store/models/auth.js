
const state = {
  token: window.localStorage.getItem('token')
}

const getters = {
  isLoggedIn: state => !!state.token,
  getToken: state => state.token
}

const actions = {
  login: () => {

  },
  finalizeLogin: ({commit}, hash) => {

  },
  logout: () => {

  }
}

const mutations = {

  setToken: (state, token) => {
    state.token = token
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
