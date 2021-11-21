<template>
  <b-container fluid class="projects reveal" id="projects">
    <SectionTitle
      title="Mes Réalisations"
      subtitle="Laissez-vous inspirer par mes réalisations"
    />
    <b-container>
      <b-row>
        <b-col sm="12" md="8 offset-md-2 projects-filter">
          <a
            :class="{ selected: filter === 'all' }"
            @click.prevent="filter = 'all'"
            class="filterLink"
          >
            Tous
          </a>
          <a
            :class="{ selected: filter === 'desktop' }"
            @click.prevent="filter = 'desktop'"
            class="filterLink"
          >
            Desktop
          </a>
          <a
            :class="{ selected: filter === 'mobile' }"
            @click.prevent="filter = 'mobile'"
            class="filterLink"
          >
            Mobile
          </a>
          <a
            :class="{ selected: filter === 'web' }"
            @click.prevent="filter = 'web'"
            class="filterLink"
          >
            Web
          </a>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="projects-container">
      <b-row>
        <b-col
          sm="12"
          md="4"
          class="mb-4 grid"
          v-for="project in filteredProject"
          v-bind:key="project.id"
        >
            <CardProject
              :title="project.title"
              :description="project.description"
              :image_url="project.image_url"
              :github_link="project.github_link"
              :website_link="project.website_link"
              :technologies="project.technologies"
            />
        </b-col>
      </b-row>
    </b-container>
    <b-row>
      <b-col sm="12" md="4 offset-md-5">
        <SharedButton title="En savoir plus" outlined href="/projects" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import SharedButton from "../shared/button/Button.vue";

import { mapGetters } from "vuex";
import CardProject from "../layouts/card-projects/CardProject.vue";
import Isotope from "isotope-layout";
import { selectElements } from "../../helpers/helpers";
export default {
  name: "Service",
  data() {
    return {
      filter: "",
      isotope: null,
    };
  },
  created() {
    this.relayoutTheGrid();
  },
  components: {
    SectionTitle,
    SharedButton,
    CardProject,
  },

  computed: {
    ...mapGetters("projects", {
      projects: "projects",
    }),
    filteredProject() {
      if (this.filter === "web".toLocaleLowerCase()) {
        return this.projects.filter((item) =>
          item.title.toLowerCase().includes("t")
        );
      }
      return this.projects.filter((item) => item.description.includes("a"));
    },
  },
  methods: {
    relayoutTheGrid() {
      const element = selectElements(".grid");
      this.isotope = new Isotope(element, {
        itemSelector: ".project-card",
        layoutMode: "fitRow",
      });
    },
  },
  mounted() {
    this.$store.dispatch("projects/fetchProjects");
  },
};
</script>
<style lang="scss" src="./project.style.scss"></style>
