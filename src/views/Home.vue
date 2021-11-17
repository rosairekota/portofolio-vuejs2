<template>
  <div>
    <banner />
    <service />
    <about />

    <project />
		<contact/>
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import Service from "../components/service/Service.vue";
import About from "../components/about/About.vue";
import Project from "../components/project/Project.vue";
import Contact from "../components/contact/Contact.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Service,
    About,

    Project,
    Contact
},
};
</script>
