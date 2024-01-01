import Cookies from 'js-cookie';
const state = {
  authToken: Cookies.get('authToken') || ''
}
const mutations = {
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

