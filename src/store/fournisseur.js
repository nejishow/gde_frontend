import fournisseurServices from '../services/fournisseur'
export const state = () => ({
 fournisseurs: [],
 fournisseurDate: [],
 fournisseur: {}
})
export const getters = {
  getfournisseurs(state) {
    return state.fournisseurs
  }
}
export const mutations = {
  SET_fournisseurS(state,fournisseurs) {
    state.fournisseurs =fournisseurs
  },
  SET_fournisseur(state,fournisseur) {
    state.fournisseur =fournisseur
  },


}
export const actions = {
  getFournisseur({commit}, id) {
    return fournisseurServices.getFournisseur(id).then((response) => {
      commit('SET_fournisseur', response.data)
    })
  },
  getAllFournisseurs({commit}) {
    return fournisseurServices.getAllFournisseurs().then((response) => {
      commit('SET_fournisseurS', response.data)
    })
  },
}

export default {
    state,
    mutations,
    getters,
    actions
}
