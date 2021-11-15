<template>
    <button class="button">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>
<style src="./Button.style.scss" lang="scss"></style>

