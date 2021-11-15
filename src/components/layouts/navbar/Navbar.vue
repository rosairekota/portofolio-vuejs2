<template>
  <div class="header">
    <div>
      <router-link :to="{ name: 'home' }" class="header__logo">rosaire<span>.</span>kota</router-link>
    </div>
		<div class="header__toggle active"></div>
    <div class="header__nav active">
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
export default {
  name: "Navbar",
};
</script>

<style lang="scss" src="./navbar.style.scss"></style>
