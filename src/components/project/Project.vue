<template>
  <b-container fluid class="projects" id="projects">
    <SectionTitle
      title="Mes Réalisations"
      subtitle="Laissez-vous inspirer par mes réalisations"
    />
    <b-container>
      <b-row>
        <b-col sm="12" md="8 offset-md-2 projects-filter">
          <SharedButton title="Tous les projets" outlined href="/projects" />
          <SharedButton title="Fintech" outlined href="/projects" />
          <SharedButton title="Mediatheques" outlined href="/projects" />
          <SharedButton title="Autres" outlined href="/projects" />
        </b-col>
      </b-row>
    </b-container>
    <b-container class="projects-container">
      <b-row>
        <b-col
          sm="12"
          md="4"
          class="mb-4"
          v-for="project in projects.slice(0, 6)"
          v-bind:key="project.id"
        >
          <CardProject
            :title="project.title"
            :description="project.description"
            :image_url="project.image_url"
						:github_link="project.github_link"
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
export default {
  name: "Service",
  components: {
    SectionTitle,
    SharedButton,
    CardProject,
  },

  computed: {
    ...mapGetters("projects", {
      projects: "projects",
    }),
  },
  mounted() {
    this.$store.dispatch("projects/fetchProjects");
  },
};
</script>
<style lang="scss" src="./project.style.scss"></style>
