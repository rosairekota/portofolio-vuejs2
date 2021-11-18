<template>
  <div class="header" id="header">
    <logo />
    <div class="scroll-btn" id="scrollBtn" @click="scrollUp">
      <i class="fas fa-arrow-circle-up"></i>
    </div>
    <div class="header-toggle" id="btnToggle" @click.prevent="handelActive">
      <i class="fas fa-arrow-circle-up"></i>
    </div>

    <div class="header-nav">
      <a href="#">Accueil</a>
      <a href="#services">Services</a>
      <a href="#about">A propos</a>
      <a href="#skills">Competence</a>
      <a href="#projects">Realisation</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
import { selectElements } from "../../../helpers/helpers";
import Logo from "../../shared/logo/Logo.vue";
export default {
  name: "Navbar",
  components: { Logo },
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

    handelToUpScroll() {
      selectElements("#scrollBtn").classList.toggle(
        "active",
        window.scrollY > 500
      );
    },

    scrollUp() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handelScroll);

    window.addEventListener("scroll", this.handelToUpScroll);

    this.linksClick();
  },
};
</script>

<style lang="scss" src="./navbar.style.scss"></style>
