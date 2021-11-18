<template>
  <div id="app">
    <navbar></navbar>
    <Home />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/layouts/navbar/Navbar.vue";
import Home from "./views/Home.vue";
import Footer from "./components/layouts/footer/Footer.vue";


export default {
  components: {
    Navbar,
    Home,
    Footer,
  },
};
</script>
