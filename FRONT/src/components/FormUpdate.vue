<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Atualizar Despesa</h5>
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
            <select
              name="categoria"
              id="categoria"
              class="form-control"
              v-model="signup.categoria"
            >
              <option value="0" selected></option>
              <option value="Casa">Casa</option>
              <option value="Carro">Carro</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Animais de Estimação">Animais de Estimação</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="pagamento" class="form-label">Forma de Pagamento</label>
            <select
              name="pagamento"
              id="pagamento"
              class="form-control"
              v-model="signup.pagamento"
            >
              <option value="0" selected></option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Débito">Débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <input
              type="date"
              name="data"
              id="data"
              class="form-control"
              v-model="signup.despesa_data"
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-tertiary" @click="limparCampos">
          Limpar Campos
        </button>

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Cancelar
        </button>
        <button type="button" class="btn btn-primary" @click="validar">
          Atualizar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "FormUpdate",
  data() {
    return {
      signup: {},
    };
  },
  mounted() {
    this.getDespesasId();
  },
  methods: {
    getDespesasId: function () {
      const { id } = this.$route.params;

      api.get("despesas/" + id).then((Request) => {
        this.signup = Request.data;
      });
    },

    Update() {
      const { id } = this.$route.params;
      api.put("despesas/" + id, this.signup).then((Response) => {
        //console.log(Response.data);
        alert("Despesa alterada com sucesso");
      });
    },
    validar() {
      if (
        this.signup.descricao == "" ||
        this.signup.valor == "" ||
        this.signup.categoria == "" ||
        this.signup.pagamento == "" ||
        this.signup.despesa_data == ""
      ) {
        alert("Os campos nao podem ficar vazios.");
      } else if (this.signup.valor < 1) {
        alert("Valor da despesa nao pode ser zero ou menor");
      } else {
        this.Update();
        this.limparCampos();
      }
    },
    limparCampos() {
      this.signup.descricao = "";
      this.signup.valor = "";
      this.signup.categoria = "";
      this.signup.pagamento = "";
      this.signup.despesa_data = "";
    },
  },
};
</script>

<style scoped >
.btn.btnUpdate {
  padding: 0;
}

.modal-dialog {
  text-align: left;
}

input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

select:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
</style>