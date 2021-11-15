<template>
  <div>
    <banner/>
		<service/>
  </div>
</template>

<script>
import Banner from "../components/banner/Banner.vue";
import Service from "../components/service/Service.vue";

export default {
  name: "Home",
  components: {
    Banner,
		Service,
},

};
</script>
