<template>
  <b-container fluid class="">
    <b-row class="banner">
      <b-col sm="12" md="8">
        <div class="banner__social-media">
          <img
            src="../../assets/illustrations/facebook.svg"
            alt="facebook"
            class="social__facebook"
          />
          <img
            src="../../assets/illustrations/twitter.svg"
            alt="twitter"
            class="social__twitter"
          />
          <img
            src="../../assets/illustrations/linkedin.svg"
            alt="linkedin"
            class="social__linkedin"
          />
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
    };
  },
};
</script>
<style lang="scss" src="./banner.style.scss"></style>
