<template>
  <div class="container">
    <div class="descricao">
      <h1>Gerenciamento de Despesas</h1>
      <p>
        O site de gerencimanto de despesas tem como objetivo <br />
        auxiliar a todos os usuários a manter um controle nos gastos<br />
        de maneira simples e prática. Realize um cadastro e fique atualizado
        <br />de quanto sobrará todos os meses e saiba como controlar suas
        depesas.
      </p>

      <div class="cadastro">
        <router-link class="vamoscomecar" to="/signin" tag="button"
          >Vamos Começar</router-link
        >
        <router-view />
      </div>
    </div>
    <div class="imagem">
      <img src="/img/principal.png" alt="banner" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 70vh;
  top: 25%;
  left: 50px;
  position: absolute;
}

.descricao h1 {
  font-size: 43px;
}

.descricao p {
  font-size: 15px;
  margin: 30px 0 30px 20px;
  line-height: 25px;
  color: #b6b6b6;
}
.imagem {
  width: 56%;
  float: right;
}

.imagem img {
  width: 100%;
  margin-top: -395px;
  margin-left: 100px;
  background-size: cover;
}

.cadastro a {
  text-decoration: none;
  padding: 10px;
  border-radius: 25px;
  color: white;
  background: #ba68c8;
  margin-left: 10%;
}

.cadastro a:hover,
.cadastro a.router-link-active,
.cadastro a.router-link-exact-active {
  cursor: pointer;
  background-color: #83498c;
  transition-duration: 0.5s;
}
</style>