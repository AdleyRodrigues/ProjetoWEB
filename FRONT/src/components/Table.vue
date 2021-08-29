<template>
  <div class="tabela">
    <button type="button" class="btn btn-outline-danger" @click="logout">Sair</button>
    <table class="table table-hover table-overflow">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Categoria</th>
          <th scope="col">Forma de Pagamento</th>
          <th scope="col">Data</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- Daqui -->
          <th scope="row">1</th>
          <td>internet</td>
          <td>R$ 70,00</td>
          <td>Casa</td>
          <td>Dinheiro</td>
          <td>23/04/2021</td>
          <td><FormUpdate /></td>
          <td>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import FormUpdate from "../components/FormUpdate.vue";
import api from "../services/api";
export default {
  name: "Table",
  components: {
    FormUpdate,
  },
  methods: {
    logout() {
      api.get("users/logout").then((result) => {
        //this.logged = false;
        console.log(result);
        localStorage.removeItem("user");
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>
<style scoped>
.tabela {
  position: absolute;
  width: 60%;
  height: 300px;
  margin-top: 14%;
  margin-left: 20%;
  text-align: center;
  overflow-y: auto;
}
.delete {
  background: none;
  border: none;
  padding: 0;
}
</style>