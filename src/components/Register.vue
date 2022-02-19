<template>
  <v-container>
      <form @submit.prevent>
        <input type="text" @input="name = $event.target.value" :value="name" class="form-control my-3" id="firstname" placeholder="Enter your firstname" name="firstname">
 
        <input type="email" @input="email =$event.target.value" :value="email" class="form-control my-3" id="email" placeholder="Enter your email" name="email">
 
        <button  @click="createClient" type="submit" class="btn btn-primary">Create</button>
</form>
 <div class="border mt-3" v-for="client in clients" :key="client.id">
      <div><b>Name:</b>{{client.name}}</div>
      <div><b>Email:</b>{{client.email}}</div>
    </div>
  </v-container>
</template>

<script>

export default {
    name: "Register",
    data: ()=> {
      return{
        clients:[
          
        ],
        
      }
    },
    methods:{
      createClient(e){
        e.preventDefault();
        e.stopPropagation();
     
        const newClient = {
          id: Date.now(),
          name: this.name,
          email: this.email,
        }
        this.clients.push(newClient)
        this.name = ""
        this.email = ""
      }
    }
 
}
</script>
