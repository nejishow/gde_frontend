import bonServices from '../services/bon.services'
export const state = () => ({
  bons: [],
  bonDate: [],
  bon: {}
})
export const getters = {
  getBons(state) {
    return state.bons
  }
}
export const mutations = {
  SET_BONS(state, bons) {
    state.bons = bons
  },
  SET_BON(state, bon) {
    state.bon = bon
  },

}
export const actions = {
  getBons({commit}, date) {
    return bonServices.getBons(date).then((response) => {
      commit('SET_BONS', response.data)
    })
  },
  getBon({commit}, id) {
    return bonServices.getBon(id).then((response) => {
      commit('SET_BON', response.data)
    })
  },
  getAllBons({commit}) {
    return bonServices.getAllBons().then((response) => {
      console.log(response)

      commit('SET_BONS', response.data)
    })
  },
}

export default {
    state,
    mutations,
    getters,
    actions
}
