<template>
  <div class="header" id="header">
    <logo />
    <div class="header-toggle" id="btnToggle" @click.prevent="handelActive">
      Menu
    </div>
    <div class="header-nav">
      <router-link :to="{ name: 'home' }">Accueil</router-link>
      <router-link :to="{ name: 'home' }">Services</router-link>
      <router-link :to="{ name: 'home' }">A propos</router-link>
      <router-link :to="{ name: 'home' }">Competence</router-link>
      <router-link :to="{ name: 'home' }">Realisation</router-link>
      <router-link :to="{ name: 'home' }">Contact</router-link>
    </div>
  </div>
</template>

<script>
import { selectElements } from "../../../helpers/helpers";
import Logo from "../../shared/logo/Logo.vue";
export default {
  name: "Navbar",
  methods: {
    handelScroll(e) {
      e.preventDefault();
      selectElements("#header").classList.toggle("sticky", window.scrollY > 40);
      selectElements("#header").classList.toggle("bevhor");
    },
    handelActive() {
      selectElements("#btnToggle").classList.toggle("active");
      selectElements(".header-nav").classList.toggle("active");
    },
    removeActiveClass() {
      selectElements("#btnToggle").classList.remove("active");
      selectElements(".header-nav").classList.remove("active");
    },
    linksClick() {
      selectElements(".header-nav a", true).forEach((item) => {
        item.addEventListener("click", this.removeActiveClass);
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handelScroll);
    this.linksClick();
  },
  components: { Logo },
};
</script>

<style lang="scss" src="./navbar.style.scss"></style>
