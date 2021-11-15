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
import { fetchAPI } from "../../config/ApiURL";
export default {
  name: "Service",
  components: {
    SectionTitle,
    CardServices,
  },
  data() {
    return {
      services: [
        {
          name: "Web Design",
          icon: "fas fa-palette",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
        {
          name: "Développement web",
          icon: "fas fa-file-code",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
        {
          name: "Administration Réseaux",
          icon: "fas fa-server",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
      ],
    };
  },
  mounted() {
    async () => {
      const serices = await fetchAPI.get("/services");
      this.services.push(serices);
    };
  },
};
</script>
<style lang="scss" src="./service.style.scss"></style>
