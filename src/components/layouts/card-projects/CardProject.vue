<template>
  <div class="project-card">
    <div class="card-img">
      <img :src="image_url" :alt="title" class="img-fluid" v-show="image_url" />
    </div>
    <div class="overlay card-info">
      <h4>{{ title }}</h4>
      <p>
        {{ description }}
      </p>
      <p class="technos">
        <a :href="github_link" v-if="github_link">Lien Github</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    image_url: String,
    title: String,
    description: String,
    github_link: String,
    technologies: { Array, default: () => [] },
  },
};
</script>
<style src="./CardProject.style.scss" lang="scss"></style>
