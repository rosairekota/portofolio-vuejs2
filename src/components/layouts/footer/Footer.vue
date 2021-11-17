<template>
  <footer class="footer">
    <logo />
    <p class="footer-copy-right">
      Copyright &copy; {{ year }},
      <a href="https://kinshasadigital">Rosaire Kota, FullStack Developper</a>
    </p>
  </footer>
</template>

<script>
import Logo from "../../shared/logo/Logo.vue";
export default {
  name: "Footer",
  props: {
    center: String,
    left: String,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  components: { Logo },
};
</script>
<style src="./Footer.style.scss" lang="scss"></style>
