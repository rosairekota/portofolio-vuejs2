<template>
  <b-container fluid class="skills">
    <b-container class="services__container">
      <b-row>
        <b-col sm="12" md="6">
          <h2>JE SUIS EXPERT EN</h2>
          <h4>Travaillons ensemble</h4>
          <p>
            Les principales technologies avec lesquelles je travaille sont
            React.js, JavaScript, Node.js, Express, PostgreSQL, HTML et CSS pour
            construire des projets. J'ai créé des applications full-stack en
            solo et collaboré avec des coéquipiers pour donner vie à des idées
            de projets
          </p>
        </b-col>
        <b-col sm="12" md="6"> Icon </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import photo from "../../assets/images/basic/rkota-pur.png";
export default {
  name: "Skill",
  components: {},
  data() {
    return {
      photo,
      abouts: [
        {
          firstName: "Web Design",
          icon: "fas fa-palette",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
        {
          name: "Développement web",
          icon: "fas fa-file-code",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
        {
          name: "Administration Réseaux",
          icon: "fas fa-server",
          description:
            "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
        },
      ],
    };
  },
};
</script>
<style lang="scss" src="./Skill.style.scss"></style>
