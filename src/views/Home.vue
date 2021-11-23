<template>
  <div>
    <banner />
    <service />
    <about />
    <skill />
    <project />
    <contact />
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import Service from "../components/service/Service.vue";
import About from "../components/about/About.vue";
import Project from "../components/project/Project.vue";
import Contact from "../components/contact/Contact.vue";
import Skill from "../components/skill/Skill.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Service,
    About,
    Project,
    Contact,
    Skill,
  },
};
</script>
