import Vue from "vue";
import Vuex from "vuex";
import abouts from "./modules/about";
import projects from "./modules/project";
import services from "./modules/service";
import skills from "./modules/skill";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    abouts: abouts,
    projects: projects,
    services: services,
    skills: skills,
  },
  strict: debug,
});
