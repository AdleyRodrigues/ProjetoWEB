<template>
  <div class="expenses">
    <FormExpenses />
    <Table />
  </div>
</template>

<script>
import Table from "../components/Table.vue";
import FormExpenses from "../components/FormExpenses.vue";

export default {
  name: "Expenses",
  components: {
    FormExpenses,
    Table,
  },
  created() {
    if (localStorage.getItem("user")) {
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