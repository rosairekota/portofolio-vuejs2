import { fetchAPI } from "../../config/ApiURL";

//to handle state
const state = {
  abouts: [],
};

//to handle state
const getters = {
  getAbouts: (state) => state.abouts,
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
const abouts = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default abouts;
