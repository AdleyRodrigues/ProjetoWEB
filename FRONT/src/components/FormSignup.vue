<template>
  <div class="container-fluid">
    <div class="content">
      <div class="cadastro">
        <form @submit.prevent="validar" class="form">
          <h1>Crie sua Conta</h1>
          <br />

          <label class="label-input" for="">
            <i class="far fa-user icoon"></i>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              v-model="signup.nome"
              autofocus
            />
          </label>

          <label class="label-input" for="">
            <i class="far fa-envelope icoon"></i>
            <input
              type="text"
              id="usuario"
              name="usuario"
              v-model="signup.usuario"
              placeholder="Usuario"
            />
          </label>

          <label class="label-input" for="">
            <i class="fas fa-lock icoon"></i>
            <input
              type="password"
              id="senha"
              name="senha"
              v-model="signup.senha"
              placeholder="Senha"
            />
          </label>

          <label class="label-input" for="">
            <i class="fas fa-lock icoon"></i>
            <input
              type="password"
              name="senha2"
              id="senha2"
              v-model="signup.senha2"
              placeholder="Confirmar Senha"
            />
          </label>

          <button type="submit" class="btnCadastrar" id="cadastrar">
            Criar Conta
          </button>

          <router-link class="home" to="/"> Pagina Inicial</router-link>
        </form>
      </div>

      <div class="imagem">
        <img src="/img/cadastroUser.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "FormSignup",
  data() {
    return {
      signup: {
        nome: "",
        usuario: "",
        senha: "",
      },
    };
  },
  methods: {
    cadastrar() {
      api.post("contas", this.signup).then((Response) => {
        console.log(this.signup);
        alert("Usuario cadastrado com sucesso");
      });
    },
    validar() {
      if (
        this.signup.nome == "" ||
        this.signup.usuario == "" ||
        this.signup.senha == "" ||
        this.signup.senha2 == ""
      ) {
        alert("Os campos nao podem ficar vazios.");
      } else if (this.signup.senha.length < 6) {
        alert("Senha precisa ter 6 digitos.");
      } else if (this.signup.senha != this.signup.senha2) {
        alert("As senhas não são iguais! Tente novamente.");
      } else {
        this.cadastrar();
      }
    },
  },
};
</script>

<style scoped>
.container-fluid{
  
   display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f2;
}

.content {
  background-color: #fff;
  border-radius: 15px;
  width: 68%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.1);
}

.form {
  display: flex;
  flex-direction: column;
}

input:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.form input {
  height: 40px;
  width: 100%;
  border: none;
  background-color: #e6e6e6;
  border-radius: 25px;
}

.label-input {
  background-color: #e6e6e6;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 0 8px;
}

.btnCadastrar {
  margin: 5px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background-color: #ba68c8;
  height: 40px;
  padding: 0 8px;
}

.btnCadastrar:hover {
  cursor: pointer;
  transition-duration: 0.5s;
  background-color: #83498c;
}

.icoon {
  color: #666666;
  padding: 0 8px;
}

.imagem {
  display: flex;
  margin-left: 40px;
}
img {
  height: 60vh;
  width: 30vw;
}

.pag,
.home {
  text-decoration: none;
  color: #666666;
  margin: 10px;
}
</style>