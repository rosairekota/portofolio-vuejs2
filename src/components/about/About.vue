<template>
  <b-container fluid class="about" id="about">
    <SectionTitle
      title="A propos de Moi"
      subtitle="Pourquoi me faire Confiance ?"
    />
    <b-container class="services-container">
      <b-row>
        <b-col sm="12" md="4">
          <div class="about-image">
            <img :src="photo" alt="image_du_profile" />
						<div class="overlay"></div>
          </div>
        </b-col>
        <b-col
          sm="12"
          md="6"
          class="offset-md-2"
          v-for="about in abouts.slice(0, 1)"
          v-bind:key="about.id"
        >
          <div v-html="about.description"></div>
          <b-row class="about-contact">
            <b-col class="col-6 contact-left">
              <p>
                <span>Nom : </span> {{ about.firstname }} {{ about.lastname }}
              </p>
              <p><span>Email : </span> {{ about.email }}</p>
            </b-col>
            <b-col class="col-6">
              <p><span>Phone : </span> {{ about.phone }}</p>
              <p>
                <span>Username Github : </span>
                {{ about.github_link.substring(19, 50) }}
              </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import photo from "../../assets/images/basic/rkota-pur.png";

import { mapGetters } from "vuex";
export default {
  name: "About",
  components: {
    SectionTitle,
  },
  data() {
    return {
      photo,
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
<style lang="scss" src="./about.style.scss"></style>
