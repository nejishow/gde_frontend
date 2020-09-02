import mandatServices from "../services/mandats";
export const state = () => ({
  mandats: [],
  mandatDate: [],
  mandat: {},
});
export const getters = {
  getMandats(state) {
    return state.mandats;
  },
};
export const mutations = {
  SET_mandatS(state, mandats) {
    state.mandats = mandats;
  },
  SET_mandat(state, mandat) {
    state.mandat = mandat;
  },
};
export const actions = {
  getMandats({ commit }, date) {
    return mandatServices.getMandats(date).then((response) => {
      commit("SET_mandatS", response.data);
    });
  },
  getMandat({ commit }, id) {
    return mandatServices.getMandat(id).then((response) => {
      commit("SET_mandat", response.data);
    });
  },
  getAllMandats({ commit }) {
    return mandatServices.getAllMandats().then((response) => {
      commit("SET_mandatS", response.data);
    });
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
