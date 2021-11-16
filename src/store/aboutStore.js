import { fetchAPI } from "../config/ApiURL";
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

//to handle state
const state = {
  abouts: [],
};

//to handle state
const getters = {
  abouts: (state) => state.abouts,
};

//to handle actions
const actions = {
  fetchAbouts({ commit }) {
    fetchAPI.get("/abouts").then((response) => {
      commit("GET_ABOUTS", response.data.data);
    });
  },
};

//to handle mutations
const mutations = {
  GET_ABOUTS: (state, abouts) => {
    state.abouts = abouts;
  },
};

//export store module
let aboutstore = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: true,
});

global.store = aboutstore;

export default aboutstore;
