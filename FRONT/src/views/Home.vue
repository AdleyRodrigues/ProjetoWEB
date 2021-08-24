<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <Banner />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Banner,
    Navbar,
  },
  data() {
    return {
      logo_src: "./img/Logotipo.png",
      app_name: "Sistema bancario",
    };
  },
};
</script>
<style scoped>
</style>
