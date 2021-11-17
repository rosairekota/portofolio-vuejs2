import { fetchAPI } from "../../config/ApiURL";

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
      commit("SET_SERVICES", response.data.data);
    });
  },
};

//to handle mutations
const mutations = {
  SET_SERVICES: (state, services) => {
    state.services = services;
  },
};

//export store module
const services = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default services;
