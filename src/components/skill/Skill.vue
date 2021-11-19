<template>
  <b-container fluid class="skills" id="skills">
    <b-container class="skills-container">
      <b-row>
        <b-col sm="12" md="6">
          <b-row>
            <b-col sm="12" md="12">
              <h2 class="skills-title">Profitez de mon Expertise</h2>
              <h3 class="skills-subtitle">Travaillons ensemble</h3>
            </b-col>
            <b-col sm="12" md="12" class="mt-4">
              <p class="skills-description">
                Les principales technologies avec lesquelles je travaille sont
                React.js, JavaScript, Node.js, Express, PostgreSQL, HTML et CSS
                pour construire des projets. J'ai créé des applications
                full-stack en solo et collaboré avec des coéquipiers pour donner
                vie à des idées de projets
              </p>
            </b-col>
          </b-row>
        </b-col>
        <b-col sm="12" md="5" class="offset-md-1">
          <div
            class="skills-technos"
            v-for="skill in skills.slice(0, 6)"
            :key="skill.id"
          >
            <div class="techons-text mt-4">
              <h5>{{ skill.name }}</h5>
              <div class="skill-progress">
                <h5>{{ ((skill.progress / 100) * 100).toFixed(0) }}%</h5>
              </div>
            </div>
            <b-progress :max="max">
              <b-progress-bar
                :value="skill.progress"
                variant="danger"
              ></b-progress-bar>
            </b-progress>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import photo from "../../assets/images/basic/rkota-pur.png";
import { mapGetters } from "vuex";

export default {
  name: "Skill",
  components: {},
  props: {
    name: String,
    progress: Number,
  },
  data() {
    return {
      photo,
      counter: 0,
      value: 75,
    };
  },
  computed: {
    ...mapGetters("skills", {
      skills: "skills",
    }),
  },

  mounted() {
    this.$store.dispatch("skills/fetchSkills");
  },
};
</script>
<style lang="scss" src="./Skill.style.scss"></style>
