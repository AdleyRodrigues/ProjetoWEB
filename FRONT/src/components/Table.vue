<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
  <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Inserir Despesas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="descricao" class="form-label">Descrição</label>
              <input
                type="text"
                name="descricao"
                id="descricao"
                class="form-control"
                autofocus
              />
            </div>
            <div class="mb-3">
              <label for="despesa" class="form-label">Valor da Despesa</label>
              <input
                type="number"
                name="despesa"
                id="despesa"
                class="form-control"
              />
            </div>

            <div class="mb-3">
              <label for="categoria" class="form-label">Categoria</label>
              <select name="categoria" id="categoria" class="form-control">
                <option value="0" selected></option>
                <option value="Casa">Casa</option>
                <option value="Carro">Carro</option>
                <option value="Alimentação">Alimentação</option>
                <option value="Animais de Estimação">
                  Animais de Estimação
                </option>
              </select>
            </div>

            <div class="mb-3">
              <label for="pagamento" class="form-label"
                >Forma de Pagamento</label
              >
              <select name="pagamento" id="pagamento" class="form-control">
                <option value="0" selected></option>
                <option value="Cartão de Crédito">Cartão de Crédito</option>
                <option value="Débito">Débito</option>
                <option value="Dinheiro">Dinheiro</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="data" class="form-label">Data</label>
              <input type="date" name="data" id="data" class="form-control" />
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                id="pago"
                name="pago"
              />
              <label class="form-check-label" for="pago"> Pago? </label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-tertiary" type="reset">Limpar</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <div class="tabela">
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      + Nova Despesa
    </button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Descrição</th>
          <th scope="col">Valor</th>
          <th scope="col">Categoria</th>
          <th scope="col">Forma de Pagamento</th>
          <th scope="col">Data</th>
          <th scope="col">Situação</th>
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
          <td>pago</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.tabela {
  width: 60%;
  height: 70%;
  margin-top: 15%;
  margin-left: 20%;
  text-align: center;
}

</style>