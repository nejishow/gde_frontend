import bonServices from '../services/bon.services'
export const state = () => ({
  bons: [],
  bonDate: []
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
  SET_BONDATE(state,data) {
    data.data.foreach(bon => {
        if (bon.Date_cmd === data.date) {
         console.log('ues');   
        }
      });
  }

}
export const actions = {
  getBons({commit}, date) {
    return bonServices.getBons(date).then((response) => {
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
