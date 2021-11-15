<template>
  <div class="about">
    <b-container>
      <SectionTitle title="A propos de Moi" subtitle="Pourquoi me faire Confiance ?"/>
      <div class="service__container">
      </div>
    </b-container>
  </div>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
export default {
  name: "About",
  components: {
    SectionTitle,
  },
  data() {
    return {
      title: "Je suis Rosaire Kota",
    };
  },
};
</script>
<style lang="scss" src="./about.style.scss"></style>
