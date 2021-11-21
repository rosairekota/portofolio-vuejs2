<template>
  <b-container fluid class="services reveal" id="services">
    <SectionTitle
      title="Services"
      subtitle="Quels sont mes domaines d'expertise ?"
    />
    <b-container class="services-container">
      <b-row>
        <b-col
          v-for="service in services"
          v-bind:key="service.name"
          sm="12"
          md="4"
        >
          <cardServices
            :title="service.name"
            :description="service.description"
            :icon="service.icon"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import CardServices from "../shared/card/Card.vue";
import { mapGetters } from "vuex";
export default {
  name: "Service",
  components: {
    SectionTitle,
    CardServices,
  },

  computed: {
    ...mapGetters("services", {
      services: "services",
    }),
  },

  mounted() {
    this.$store.dispatch("services/fetchServices");
  },
};
</script>
<style lang="scss" src="./service.style.scss"></style>
