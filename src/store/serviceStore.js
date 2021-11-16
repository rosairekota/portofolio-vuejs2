import { fetchAPI } from "../config/ApiURL";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//to handle state
const state = {
  services: [],
};

//to handle state
const getters = {
  services: (state) => state.services,
};

//to handle actions
const actions = {
  fetchServices({ commit }) {
    fetchAPI.get("/services").then((response) => {
      commit("GET_SERVICES", response.data.data);
    });
  },
};

//to handle mutations
const mutations = {
  GET_SERVICES: (state, services) => {
    state.services = services;
  },
};

//export store module
let serviceStore = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true,
});

global.store = serviceStore;

export default serviceStore;
