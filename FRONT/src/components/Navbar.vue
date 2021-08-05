<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Inicio</router-link> 
    <router-link to="/signin">Entrar</router-link>
    <router-link to="/expenses">Despesas</router-link>
    
  </div>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]

}
</script>

<style scoped>
#nav{
    padding: 15px 50px;
    display: flex;
    float: left;
}

#nav a{
    color: black;
    text-decoration: none;
    margin: 12px;
}

#nav a:hover{
    color:#6056c9;
}

#nav #logo-url{
    margin: auto;
    margin-left: 0;
}

#logo{
    width: 40px;
    height: 40px;
}

</style>