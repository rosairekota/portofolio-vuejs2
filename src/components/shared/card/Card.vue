<template>
    <div class="service__card">
		<h4>{{ title }}</h4>
		<p>{{description}}</p>
		</div>
</template>

<script>
export default {
  name: "CardServices",
  props: {
    title: String,
	description: String,
  },
};
</script>
<style src="./Card.style.scss" lang="scss"></style>

