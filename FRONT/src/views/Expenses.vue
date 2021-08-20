<template>
  <div>
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
};
</script>

<style scoped>

</style>