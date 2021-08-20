<template>
  <div class="btnUpdate new">
    <button
      type="button"
      class="  btn btnUpdate"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal1"
    >
      <i class="fas fa-pen"></i>
    </button>

    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Alterar Despesa </h5>
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
                  v-model="signup.descricao"
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
                  v-model="signup.valor"
                />
              </div>

              <div class="mb-3">
                <label for="categoria" class="form-label">Categoria</label>
                <select name="categoria" id="categoria" class="form-control" v-model="signup.categoria">
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
                <select name="pagamento" id="pagamento" class="form-control" v-model="signup.forma_pagamento">
                  <option value="0" selected></option>
                  <option value="Cartão de Crédito">Cartão de Crédito</option>
                  <option value="Débito">Débito</option>
                  <option value="Dinheiro">Dinheiro</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input type="date" name="data" id="data" class="form-control" v-model="signup.data" />
              </div>
              
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-tertiary"
              data-bs-dismiss="modal"
            >
              Limpar Campos
            </button>

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
  </div>
</template>

<script>
import api from "../services/api"
export default {
  name: "FormUpdate",
  data() {
    return {
      signup: {
        descrição:"",
        valor: "",
        categoria: "",
        forma_pagamento: "",
         data: "",
        
      },
     
    };
  },
  methods: {
      cadastrar(){
      api.post('despesas', this.signup).then((Response) => {
        console.log(Response.data);
        alert("Despesa cadastrada com sucesso")
      })
    }

  },
};
</script>

<style scoped >
.btn.btnUpdate{
    padding: 0;
    
}

</style>