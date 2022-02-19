<template>
 <div id="app">
    <router-link to="/register">Create</router-link>
    <router-view></router-view>
 </div>
</template>

<script>
import Register from './components/Register.vue'
 
 
export default {
  name: 'App',
  components:{
    Register,
     
  },
  props:{
   clients:{ 
     type: String,
    required:true
    }
  }
  
}

</script>

<style>
 
</style>
