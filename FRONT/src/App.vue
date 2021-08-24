<template>
<div>
  <router-link to="/"></router-link> 
  <router-view/>
</div>
  
  
</template>


<script>


export default {
  name: "App",
  data(){
    return {
    };
  },
  methods: {

  },
};
</script>

<style>
* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

</style>
