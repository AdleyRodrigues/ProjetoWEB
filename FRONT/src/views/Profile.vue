<template>
  <FormProfile />
</template>

<script>
import FormProfile from "../components/FormProfile.vue";
export default {
  name: "Profile",
  components: {
    FormProfile,
  },
  data() {
    return {};
  },
  created() {
    if (sessionStorage.getItem("user")) {
      console.log("Ok");
    } else {
      this.$router.push("/signin");
    }
  },
};
</script>

<style scoped>
</style>