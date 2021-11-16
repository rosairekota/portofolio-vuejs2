<template>
  <b-container fluid class="about">
    <SectionTitle
      title="A propos de Moi"
      subtitle="Pourquoi me faire Confiance ?"
    />
    <b-container class="services-container">
      <b-row>
        <b-col sm="12" md="4">
          <img :src="photo" alt="" />
        </b-col>
        <b-col
          sm="12"
          md="6"
          class="offset-md-2"
          v-for="about in abouts"
          v-bind:key="about.id"
        >
          <div v-html="about.description">
            {{ about.description | raw }}
          </div>
          <div class="about-contact">
            <div class="contact_left">
              <p>
                <span>Nom : </span> {{ about.firstname }} {{ about.lastname }}
              </p>
              <p><span>Email : </span> {{ about.email }}</p>
            </div>
            <div class="contact_right">
              <p><span>Phone : </span> {{ about.phone }}</p>
              <p><span>Linkedin : </span> rosairekota@gmai.com</p>
            </div>
          </div>
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
