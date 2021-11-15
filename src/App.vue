<template>
  <div id="app">
    <navbar></navbar>
		<Home />
  </div>
</template>

<script>
import Navbar from "./components/layouts/navbar/Navbar.vue";
import Home from "./views/Home.vue";
export default {
  components: {
    Navbar,
    Home,
  },
};
</script>
