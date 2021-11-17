<template>
  <div>
    <router-link
      :to="{ name: 'home' }"
      :class="[center ? 'center' : 'left']"
      class="logo"
      >rosaire<span>.</span>kota</router-link
    >
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    center: String,
    left: String,
  },
};
</script>
<style src="./Logo.style.scss" lang="scss"></style>
