<template>
  <b-container fluid class="">
    <b-row v-for="about in abouts.slice(0, 1)" :key="about.id" class="banner">
      <b-col sm="12 mt-4" md="8">
        <div class="banner-social-media">
          <div class="social-github" v-if="about.github_link">
            <a :href="about.github_link">
              <img src="../../assets/illustrations/ci_github.svg" alt="github"
            /></a>
          </div>
          <div class="social-twitter" v-if="about.twitter_link">
            <a :href="about.twitter_link">
              <img src="../../assets/illustrations/twitter.svg" alt="twitter" />
            </a>
          </div>
          <div class="social-linkedin" v-if="about.linkedin_link">
            <a :href="about.linkedin_link">
              <img
                src="../../assets/illustrations/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div class="banner-description">
          <h1>{{ title }} {{ about.firstname }} {{ about.lastname }}</h1>
          <p>Développeur professionnel web et web mobile.</p>
          <br />
          <p>Je suis enthousiaste, créatif et innovant.</p>
        </div>
        <div class="banner-resume">
          <SharedButton title="Mes Realisations" outlined class="mr-4" />
          <SharedButton title="Télécharger  mon CV" filled />
        </div>
      </b-col>
      <b-col sm="12 pb-4 mt-4" md="4">
        <div class="banner-image mt-2">
          <img
            src="../../assets/illustrations/illustra.svg"
            alt="illustration_homme_devant_pc"
            class="image"
          />
          <div class="overlay"></div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SharedButton from "../shared/button/Button.vue";
import { mapGetters } from "vuex";

export default {
  name: "Banner",
  components: {
    SharedButton,
  },
  data() {
    return {
      title: "Je suis ",
    };
  },
  computed: {
    ...mapGetters("abouts", {
      abouts: "getAbouts",
    }),
  },
  mounted() {
    this.$store.dispatch("abouts/fetchAbouts");
  },
};
</script>
<style lang="scss" src="./banner.style.scss"></style>
