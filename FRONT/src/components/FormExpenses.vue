<template>
  <div class="expense">
    <router-link to="/profile" class="btn btn-outline-info">
      Meu Perfil</router-link
    >
    <button type="button" class="btn btn-outline-danger btsair" @click="logout">
      Sair
    </button>
    <div class="input-group pesquisaDescricao">
      <input
        type="text"
        name="descricao"
        id="descricao"
        class="form-control inputDescricao"
        v-model="buscaDescricao"
        placeholder="Pesquisa Nome"
      />
      <button type="button" class="btn btn-warning">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="input-group pesquisaqtd">
      <input
        type="number"
        name="quantidade"
        id="quantidade"
        class="form-control inputqtd"
        v-model="buscaQuantidade"
        placeholder="Pesquisa Quantidade"
      />
      <button type="button" class="btn btn-warning" @click="getDespesasQtd">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <button
      type="button"
      class="btn btn-primary bt"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      + Nova Despesa
    </button>

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
                  <option value="Animais de Estimação">
                    Animais de Estimação
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="pagamento" class="form-label"
                  >Forma de Pagamento</label
                >
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
            <button
              type="button"
              class="btn btn-tertiary"
              @click="limparCampos"
            >
              Limpar Campos
            </button>

            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              cancelar
            </button>
            <button type="button" class="btn btn-primary" @click="validar">
              Inserir
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="tabela">
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
          <tr v-for="despesas in listaDespesas" :key="despesas.despesa_id">
            <!-- Daqui -->
            <th scope="row">{{ despesas.despesa_id }}</th>
            <td>{{ despesas.descricao }}</td>
            <td>{{ despesas.valor }}</td>
            <td>{{ despesas.categoria }}</td>
            <td>{{ despesas.pagamento }}</td>
            <td>{{ despesas.despesa_data }}</td>
            <td><FormUpdate /></td>
            <td>
              <button class="delete" @click="deleteDespesas(despesas.despesa_id )"><i class="fas fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import FormUpdate from "../components/FormUpdate.vue";
import api from "../services/api";
export default {
  name: "FormExpenses",
  components: {
    FormUpdate,
  },
  data() {
    return {
      signup: {
        descricao: "",
        valor: "",
        categoria: "",
        pagamento: "",
        despesa_data: "",
        conta_id: ""
      },
      listaDespesas: [],
      buscaQuantidade: 0,
      buscaDescricao: "",

    };
  },
  methods: {
    cadastrar() {
      this.signup.conta_id = JSON.parse(sessionStorage.getItem("user")).conta_id;
      api.post("despesas", this.signup).then((Response) => {
        this.listaDespesas.push(Response.data);
        //alert("Despesa cadastrada com sucesso");
      });
    },
    getDespesas() {
      this.listaDespesas = [];
      var user = JSON.parse(sessionStorage.getItem("user"));
      api.get("despesas").then((Response) => {
        Response.data.forEach(element=>{
          if(element.conta_id == user.conta_id) {
            this.listaDespesas.push(element);
            //console.log(this.listaDespesas)
          }
        })
      });
    },
    getDespesasQtd(){
      var user = JSON.parse(sessionStorage.getItem("user"));
      api.get("despesas/qtd/"+this.buscaQuantidade).then((Response) => {
        console.log(Response.data);
        Response.data.forEach(element=>{
          if(element.conta_id == user.conta_id) {
            this.listaDespesas.push(element);
            //console.log(this.listaDespesas)
          }
        })
      });
    },
    deleteDespesas(id){
      api.delete("despesas/"+id).then((Response) => {
        //console.log(this.listaDespesas[0].despesa_id)
        this.getDespesas();
        
      })
    },
    validar() {
      if (
        this.signup.descricao == "" ||
        this.signup.valor == "" ||
        this.signup.categoria == "" ||
        this.signup.data == "" ||
        this.signup.descricao == ""
      ) {
        alert("Os campos nao podem ficar vazios.");
      } else if (this.signup.valor < 1) {
        alert("Valor da despesa nao pode ser menor ou igual a zero");
      } else {
        this.cadastrar();
        this.limparCampos();
      }
    },
    limparCampos() {
      this.signup.descricao = "";
      this.signup.valor = "";
      this.signup.categoria = "";
      this.signup.forma_pagamento = "";
      this.signup.data = "";
    },

    logout() {
      api.get("users/logout").then((result) => {
        this.logged = false;
        sessionStorage.removeItem("user");
        console.log(result);
        this.$router.push("/signin");
      });
    },
    
  },
  mounted() {
      this.getDespesas();
      
    },
};
</script>

<style scoped >
.btn.btn-primary.bt {
  position: absolute;
  margin-left: 20%;
  margin-top: 10%;
}
.btn.btn-outline-danger.btsair {
  position: absolute;
  margin-left: 75%;
  margin-top: 20px;
  border: none;
}

.input-group.pesquisaqtd {
  width: 19%;
  position: absolute;
  margin-left: 35%;
  margin-top: 10%;
}

.input-group.pesquisaDescricao {
  width: 19%;
  position: absolute;
  margin-left: 56%;
  margin-top: 10%;
}

.expense a {
  position: absolute;

  text-decoration: none;
  margin-left: 67%;
  margin-top: 20px;
}

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

input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

select:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
</style>