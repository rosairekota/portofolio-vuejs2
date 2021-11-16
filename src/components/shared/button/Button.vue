<template>
  <button class="button" :class="[outline ? 'outline' : 'filled']">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    outline: String,
    filled: String,
  },
};
</script>
<style src="./Button.style.scss" lang="scss"></style>
