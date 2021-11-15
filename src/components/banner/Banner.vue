<template>
  <b-container fluid class="">
    <b-row class="banner">
      <b-col sm="12" md="8">
        <div class="banner__social-media">
          <div class="social__github">
            <a :href="githublink">
              <img src="../../assets/illustrations/ci_github.svg" alt="github"
            /></a>
          </div>
          <div class="social__twitter">
            <a :href="twitterlink">
              <img src="../../assets/illustrations/twitter.svg" alt="twitter" />
            </a>
          </div>
          <div class="social__linkedin">
            <a :href="linkedinlink">
              <img
                src="../../assets/illustrations/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
        <div class="banner__description">
          <h1>{{ title }}</h1>
          <p>Développeur professionnel web et web mobile.</p>
          <br />
          <p class="banner__description">
            Je suis enthousiaste, créatif et innovant.
          </p>
        </div>
        <div class="banner__resume">
          <SharedButton title="Mes Realisations" class="btn-left" />
          <SharedButton title="Télécharger  mon CV" class="btn-right" />
        </div>
      </b-col>
      <div class="col-sm-12 col-md-4">
        <img src="../../assets/illustrations/illustra.svg" alt="illustra" />
      </div>
    </b-row>
  </b-container>
</template>

<script>
import SharedButton from "../shared/button/Button.vue";
export default {
  name: "Banner",
  components: {
    SharedButton,
  },
  data() {
    return {
      title: "Je suis Rosaire Kota",
      githublink: "https://github.com/rosairekota",
			twitterlink:"https://twitter.com/rosaire_kota",
			linkedinlink:"https://linkedin.com/in/rosaire-kota-6067981b4/",
    };
  },
};
</script>
<style lang="scss" src="./banner.style.scss"></style>
