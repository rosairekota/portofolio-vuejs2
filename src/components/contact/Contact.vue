<template>
  <b-container fluid class="contact" id="contact">
    <SectionTitle title="Contact" subtitle="Restons en contact" />
    <b-container class="contact-container">
      <address
        v-for="about in abouts.slice(0, 1)"
        v-bind:key="about.id"
        class="row"
      >
        <b-col sm="12" md="4">
          <div class="card-contact">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>

            <div class="contact-info">
              <h3>Address</h3>
              <p v-html="about.address"></p>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="card-contact">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>

            <div class="contact-info">
              <h3>Téléphone</h3>
              <p>
                <a href="tel:+243814646286">{{ about.phone }}</a>
              </p>
            </div>
          </div>
        </b-col>
        <b-col sm="12" md="4">
          <div class="card-contact">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>

            <div class="contact-info">
              <h3>Email</h3>
              <p>
                <a href="mailto:rosairekota@gmail.com">{{ about.email }}</a>
              </p>
            </div>
          </div>
        </b-col>
      </address>
    </b-container>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";

import { mapGetters } from "vuex";
export default {
  name: "Contact",
  props: {
    center: String,
    left: String,
  },

  components: { SectionTitle },
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
<style src="./contact.style.scss" lang="scss"></style>
