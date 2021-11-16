<template>
  <b-container fluid class="projects">
    <SectionTitle
      title="Mes Réalisations"
      subtitle="Laissez-vous inspirer par mes réalisations"
    />
    <b-container class="projects-container">
      <b-row>
        <b-col
          sm="12"
          md="3"
          v-for="project in projects"
          v-bind:key="project.id"
        >
          <cardprojects
            :title="project.title"
            :description="project.description"
            :icon="project.image_url"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import Cardprojects from "../shared/card/Card.vue";

import { mapGetters } from "vuex";
export default {
  name: "Service",
  components: {
    SectionTitle,
    Cardprojects,
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
