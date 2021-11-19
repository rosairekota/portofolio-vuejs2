<template>
  <div class="project-card">
    <div class="card-img">
      <img :src="image_url" :alt="title" class="img-fluid" v-show="image_url" />
    </div>
    <div class="overlay card-info">
      <div class="card- mb-4">
        <span>
          {{ technologies.map((technology) => technology.name).join(" , ") }},
        </span>
      </div>
      <h4>{{ title }}</h4>
      <div class="technos">
        <p v-show="description">
          <a :href="github_link">{{ description }} </a>
        </p>
        <div class="card-link">
          <Button title="En savoir plus" outlined />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../shared/button/Button.vue";
export default {
  name: "CardProject",
  props: {
    image_url: String,
    title: String,
    description: String,
    github_link: String,
    website_link: String,
    technologies: { Array, default: () => [] },
  },
  components: { Button },
};
</script>
<style src="./CardProject.style.scss" lang="scss"></style>
