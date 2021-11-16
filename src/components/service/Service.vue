<template>
  <b-container fluid class="services">
    <SectionTitle
      title="Services"
      subtitle="Quels sont mes domaines d'expertise ?"
    />
    <b-container class="services__container">
      <b-row>
        <b-col
          sm="12"
          md="4"
          v-for="service in services"
          v-bind:key="service.name"
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
import store from "../../store/serviceStore";
import Vuex from "vuex";
export default {
  name: "Service",
	store,
  components: {
    SectionTitle,
    CardServices,
  },

  computed: {
    ...Vuex.mapGetters(['services']),
  },
  mounted() {
    this.$store.dispatch("fetchServices");
  },
};
</script>
<style lang="scss" src="./service.style.scss"></style>
