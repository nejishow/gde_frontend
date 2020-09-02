import serviceServices from '../services/services'
export const state = () => ({
services: [],
serviceDate: [],
 service: {}
})
export const getters = {
  getServices(state) {
    return state.services
  }
}
export const mutations = {
  SET_serviceS(state,services) {
    state.services =services
  },
  SET_service(state,service) {
    state.service =service
  },


}
export const actions = {
  getService({commit}, id) {
    return serviceServices.getService(id).then((response) => {
      commit('SET_service', response.data)
    })
  },
  getAllServices({commit}) {
    return serviceServices.getAllServices().then((response) => {
      commit('SET_serviceS', response.data)
    })
  },
}

export default {
    state,
    mutations,
    getters,
    actions
}
