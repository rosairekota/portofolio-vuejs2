<template>
  <div id="app">
   <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/layouts/navbar/Navbar.vue";
export default {

components:{
 Navbar,
}
}
</script>
