import compte_budgetaireServices from '../services/compte_budgetaire'
export const state = () => ({
 compte_budgetaires: [],
 compte_budgetaireDate: [],
 compte_budgetaire: {}
})
export const getters = {
  getcompte_budgetaires(state) {
    return state.compte_budgetaires
  }
}
export const mutations = {
  SET_compte_budgetaireS(state,compte_budgetaires) {
    state.compte_budgetaires =compte_budgetaires
  },
  SET_compte_budgetaire(state,compte_budgetaire) {
    state.compte_budgetaire =compte_budgetaire
  },


}
export const actions = {
  getCompte({commit}, id) {
    return compte_budgetaireServices.getCompte(id).then((response) => {
      commit('SET_compte_budgetaire', response.data)
    })
  },
  getAllcomptes({commit}) {
    return compte_budgetaireServices.getAllComptes().then((response) => {
      commit('SET_compte_budgetaireS', response.data)
    })
  },
}

export default {
    state,
    mutations,
    getters,
    actions
}
