<template>
 
  <div class="tabela">
    <table class="table table-hover">
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
          <td><i class="fas fa-pen"></i></td>
          <td><i class="fas fa-trash-alt"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.tabela {
  position: absolute;
  width: 60%;
  height: 70%;
  margin-top: 15%;
  margin-left: 20%;
  text-align: center;
}
</style>