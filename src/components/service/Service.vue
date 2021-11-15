<template>
  <div class="service">
    <b-container>
      <SectionTitle title="Services" subtitle="Quels sont mes services ?" />
      <div class="service__container">
        <cardServices
          title="Web Design"
          description="Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy"
          icon="palette"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import CardServices from "../shared/card/Card.vue";
export default {
  name: "Service",
  components: {
    SectionTitle,
    CardServices,
  },
  data() {
    return {
      title: "Je suis Rosaire Kota",
    };
  },
};
</script>
<style lang="scss" src="./service.style.scss"></style>
