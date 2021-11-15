<template>
  <div>
    <banner />
    <service />
    <about />
    <skills />
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import Service from "../components/service/Service.vue";
import Skills from "../components/skill/Skill.vue";
import About from "../components/about/About.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Service,
    About,
    Skills,
  },
};
</script>
