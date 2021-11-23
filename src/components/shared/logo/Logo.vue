<template>
  <div>
    <router-link
      :to="{ name: 'home' }"
      :class="[center ? 'center' : 'left']"
      class="logo"
      >rkota<span>.</span>dev <span class="logo-code">&lt;&gt;</span></router-link
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
