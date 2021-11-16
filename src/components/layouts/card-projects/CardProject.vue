<template>
  <div class="card-project">
    <div class="card-project-image">
      <img :src="img" alt="image_du_projet">
    </div>
    <div class="card-body">
 	 <h4>{{ title }}</h4>
     <p>{{ description }}</p>
	</div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    icon: String,
    title: String,
    description: String,
  },
};
</script>
<style src="./CardProject.style.scss" lang="scss"></style>
