<template>
  <div class="service-card">
    <div class="services-icon">
      <i :class="icon"></i>
    </div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardServices",
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
<style src="./Card.style.scss" lang="scss"></style>
