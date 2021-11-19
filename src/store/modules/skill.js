import { fetchAPI } from "../../config/ApiURL";

//to handle state
const state = {
  skills: [],
};

//to handle state
const getters = {
  skills: (state) => state.skills,
};

//to handle actions
const actions = {
  fetchSkills({ commit }) {
    fetchAPI.get("/skills").then((response) => {
      commit("SET_SKILLS", response.data.data);
    });
  },
};

//to handle mutations
const mutations = {
  SET_SKILLS: (state, skills) => {
    state.skills = skills;
  },
};

//export store module
const skills = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default skills;
