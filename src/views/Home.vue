<template>
  <div>
    <banner />
    <service />
    <about />
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import Service from "../components/service/Service.vue";
import About from "../components/about/About.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Service,
    About,
  },
};
</script>
