import Vue from 'vue'
import Vuex from 'vuex'
import bon from '../store/bon';
import mandat from '../store/mandat';
import service from '../store/service';
import fournisseur from '../store/fournisseur';
import cb from '../store/compte_budgetaire';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bon,
    mandat, service, fournisseur, cb
  }
})
