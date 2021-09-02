<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <div class="my-4">
          <ul class="nav nav-tabs mb-4" id="myTab" role="tablist"></ul>
          <form>
            <div class="row mt-5 align-items-center">
              <div class="col-md-3 text-center mb-1">
                <div class="avatar avatar-xl">
                  <img
                    :src="'http://localhost:3033/uploads/conta/' + users.conta_id" 
                    alt="..."
                    class="avatar-img rounded-circle"
                  />
                </div>
              </div>
              <div class="col">
                <div class="row align-items-center">
                  <div class="col-md-7">
                  
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="form-row">
              <div class="form-group">
                <label for="firstname">Nome</label>
                <input
                  type="text"
                  id="firstname"
                  class="form-control border-secondary"
                  v-model="users.nome"
                  placeholder="zé da foice"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail4">Usuario</label>
              <input
                type="text"
                class="form-control border-secondary"
                id="inputEmail4"
                v-model="users.usuario"
                placeholder="zédafoice"
              />
            </div>

            <div class="form-row"></div>
            <hr class="my-4" />
            <div class="row mb-4">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="inputPassword4">Senha Antiga</label>
                  <input
                    type="password"
                    class="form-control border-secondary"
                    id="inputPassword5"
                    v-model="users.senha"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword5">Nova Senha</label>
                  <input
                    type="password"
                    class="form-control border-secondary"
                    id="inputPassword5"
                  />
                </div>
                <div class="form-group">
                  <label for="inputPassword6">Confirmar Senha</label>
                  <input
                    type="password"
                    class="form-control border-secondary"
                    id="inputPassword6"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" @click="update">Alterar Perfil</button>
            <div>
                <button type="submit" class="btn btn-secundary" @click="voltar">Voltar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import api from "../services/api";
export default 
{
  name: "InsertImg",
  data() {
    return {
      users:{},
    };
  },
  mounted() {
    this.getUsers() ;
  },
  methods: {
    getUsers() {
      this.users = JSON.parse(sessionStorage.getItem("user"));
    },
    upadte(){
      api.put("contas/", this.users).then((Response) => {
        //console.log(Response.data);
        alert("Despesa alterada com sucesso");
      });
    },
    voltar(){
      this.$router.push("/expenses");
    }
  }
};
</script>

<style scoped>
body {
  color: #8e9194;
  background-color: #f4f6f9;
}
.avatar-xl img {
  width: 110px;
}
.rounded-circle {
  border-radius: 50% !important;
}
img {
  vertical-align: middle;
  border-style: none;
}
.text-muted {
  color: #6c757d !important;
}
.text-muted {
  font-weight: 300;
}
.form-control {
  display: block;
  width: 40%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #4d5154;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #eef0f3;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn.btn-secundary{
    margin-top: 3px;
}
</style>