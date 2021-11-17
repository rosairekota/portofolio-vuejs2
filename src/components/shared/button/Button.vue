<template>
  <a class="button" :class="[outlined ? 'outlined' : 'filled']" href="#">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    outlined: Boolean,
  },
};
</script>
<style src="./Button.style.scss" lang="scss"></style>
