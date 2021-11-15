<template>
  <b-container fluid class="about">
    <SectionTitle
      title="A propos de Moi"
      subtitle="Pourquoi me faire Confiance ?"
    />
    <b-container class="services__container">
      <b-row>
        <b-col sm="12" md="4">
          <img :src="photo" alt="" />
        </b-col>
        <b-col sm="12" md="6" class="offset-md-2">
          <h4>Salut, Je suis Rosaire Kota</h4>
          <p>
            Ma passion c'est de partager mes liens, astuces et bonnes pratiques
            dans le développement web. <br>
						Convaincu d’avoir une bonne culture dans
            ce domaine , je parle JAVA, JAVASCRIPT, PHP, et PYTHON.
          </p>
          <p>
            Avez-vous une question, une suggestion ? N’hésitez pas à me
            contacter !Si vous souhaitez travailler avec moi, vous pouvez
            également me contacter!.
          </p>
          <div class="about__contact">
            <div class="contact_left">
              <p><span>Nom : </span> Rosaire Kota</p>
              <p><span>Email : </span> rosairekota@gmai.com</p>
            </div>
            <div class="contact_right">
              <p><span>Phone : </span> +243 81 46 46 286</p>
              <p><span>Linkedin : </span> rosairekota@gmai.com</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import SectionTitle from "../shared/section-title/SectionTitle.vue";
import photo from "../../assets/images/basic/rkota-pur.png";
export default {
  name: "About",
  components: {
    SectionTitle,
  },
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
<style lang="scss" src="./about.style.scss"></style>
