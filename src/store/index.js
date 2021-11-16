import Vue from "vue";
import Vuex from "vuex";
import abouts from "./modules/about";
import projects from "./modules/project";
import services from "./modules/service";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== "production";
export default new Vuex.Store({
  modules: {
    abouts: abouts,
    projects: projects,
    services: services,
  },
  strict: debug,
});
