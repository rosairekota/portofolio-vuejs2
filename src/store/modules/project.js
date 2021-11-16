import { fetchAPI } from "../../config/ApiURL";

//to handle state
const state = {
  projects: [],
};

//to handle state
const getters = {
  projects: (state) => state.projects,
};

//to handle actions
const actions = {
  fetchProjects({ commit }) {
    fetchAPI.get("/projects").then((response) => {
      commit("GET_PROJECTS", response.data.data);
    });
  },
};

//to handle mutations
const mutations = {
  GET_PROJECTS: (state, projects) => {
    state.projects = projects;
  },
};

//export store module
const projects = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default projects;
