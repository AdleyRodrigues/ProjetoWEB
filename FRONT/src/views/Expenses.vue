<template>
  <div class="expenses">
    <FormExpenses />
   
  </div>
</template>

<script>

import FormExpenses from "../components/FormExpenses.vue";

export default {
  name: "Expenses",
  components: {
    FormExpenses,
    
  },
  data(){
    return{
  
    }
  },
  created() {
    if (sessionStorage.getItem("user")) {
      console.log("Ok")
    }else{
      this.$router.push("/signin");
    }
  },
};
</script>

<style scoped>
.expenses{
  height: 100vh;
  overflow: hidden;
}

</style>