<template>
  <b-container fluid class="contact">
    <SectionTitle title="Contact" subtitle="Restons en contact" />
    <b-container class="contact-container">
      <address class="row">
        <b-col sm="12" md="4">
          <div class="card-contact">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>

            <div class="contact-info">
              <h3>Address</h3>
              <p>
                <a href="#">66 Banana, Kilimani/Kintambo,<br />Kinshasa,RDC</a>
              </p>
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
              <p><a href="tel:+243814646286">+243 81 46 46 286</a></p>
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
                <a href="mailto:rosairekota@gmail.com">rosairekota@gmail.com</a>
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
export default {
  name: "Contact",
  props: {
    center: String,
    left: String,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  components: { SectionTitle },
};
</script>
<style src="./contact.style.scss" lang="scss"></style>
