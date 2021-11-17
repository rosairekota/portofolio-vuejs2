<template>
  <button class="button" :class="[outlined ? 'outlined' : 'filled']">
    {{ title }}
  </button>
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
