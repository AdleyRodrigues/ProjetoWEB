<template>
  <div class="container-fluid">
    <div class="content">
      <div class="login">
        <form @submit.prevent="validar" class="form">
          <h1>Faça seu login</h1>
          <br />

          <label class="label-input" for="">
            <i class="far fa-envelope icoon"></i>
            <input
              type="text"
              id="email"
              name="email"
              v-model="signin.usuario"
              placeholder="Usuario"
              autofocus
            />
          </label>

          <label class="label-input" for="">
            <i class="fas fa-lock icoon"></i>
            <input
              type="password"
              id="senha"
              name="senha"
              v-model="signin.senha"
              placeholder="Senha"
            />
          </label>

          <button type="submit" class="btnEntrar" id="login">Entrar</button>

          <br /><br />

          <router-link class="cadastroConta" to="/signup"
            >Não tem login ? Cadastre-se aqui</router-link
          >
          <br /><br />
          <router-link class="home" to="/"> Pagina Inicial</router-link>
        </form>
      </div>

      <div class="imagem">
        <img src="/img/loginUser.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
export default {
  name: "FormSignin",
  data() {
    return {
      signin: {
        usuario: "",
        senha: "",
      },
    };
  },
  methods: {
    logar() {
      api
        .post("users/login/", this.signin, { withCredentials: true })
        .then((result) => {
          let userId = this.getCookie("userId");
          console.log(result.data);
          if (userId) {
            sessionStorage.setItem("user", JSON.stringify(result.data));
          }
          this.$router.push("/expenses");

          // if (Response.data.success) {
          //   //console.log(Response);
          //   window.location.href = "http://localhost:8080/expenses";
          // } else {
          //   alert("login ou senha incorretos!");
          // }
        });
    },
    getCookie(name) {
      let match = document.cookie.match(new RegExp(name + "=([^;]+)"));
      if (match) return match[1];
      return;
    },
    validar() {
      if (this.signin.usuario == "" || this.signin.senha == "") {
        alert("Os campos nao podem ficar vazios.");
      } else if (this.signin.senha.length < 6) {
        alert("Senha precisa ter 6 digitos.");
      } else {
        this.logar();
      }
    },
  },
};
//console.log(baseURI);
</script>

<style scoped>
.container-fluid {
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

.btnEntrar {
  border: none;
  border-radius: 25px;
  color: #fff;
  background-color: #ba68c8;
  height: 40px;
  padding: 0 8px;
}

.btnEntrar:hover {
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

.cadastroConta,
.home {
  text-decoration: none;
  color: #666666;
}
</style>