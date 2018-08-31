
<template>
  <div id="app">
    
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{
  },
  methods:{
  },
  computed:{
  }
}
</script>

<style>
html,body{
  padding:0 !important;
  margin:0 !important;
  width:100% !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 260px;*/
}

</style>
