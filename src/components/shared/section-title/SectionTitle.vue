<template>
    <div class="section-title">
		<h2>{{ title }}</h2>
		<h6>{{subtitle}}</h6>
		</div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
		subtitle: String,
  },
};
</script>
<style src="./SectionTitle.style.scss" lang="scss"></style>

