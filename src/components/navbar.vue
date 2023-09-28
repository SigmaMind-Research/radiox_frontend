<template>
  <v-app-bar :elevation="2" color="#111112" class="nav">
    <h1>
      <router-link to="/">RADIOX</router-link>
    </h1>
    <template v-slot:append>
      <v-btn class="icon-ele"><img width="45" height="30" src="https://img.icons8.com/ios/50/FFFFFF/help--v1.png" alt="help--v1"/></v-btn>
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="icon-ele" v-bind="props"><img width="42" height="30" src="https://img.icons8.com/material-outlined/24/FFFFFF/user-male-circle.png" alt="user-male-circle"/></v-btn>
        </template>
          <v-list>
              <v-list-item v-for="info in accoundinfo" :key="info" router :to="info.route" link>
            <v-list-item-title >{{ info.name }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click=signOut> Sign out </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script>
import axios from 'axios';

export default {
data(){
  return{
    accoundinfo:[
      {
        name: 'Profile',
        route:{name:'profile'}
      },
      {
        name: 'Settings',
        route: {name:'settings'}
      },
      {
        name: 'Support',
        route: { name: 'support' }
      },
      {
        name: 'Send feedback',
        route: { name: 'feedback' }
      },       
    ],
     mode: false,
  }
},
methods:{
  signOut(){

    const head = {
      "content-type":'any',
      "Authorization": `Bearer ${localStorage.getItem('token1')}` 
    }
       axios.post(import.meta.env.VITE_BASE_URL + 'auth/logout',"",
       {
         headers: head
        }
      )
    .then(
      localStorage.removeItem('token1'),
      this.$router.push({name:'login'})
  )
  .catch((error) =>{
    console.log(error);
  })
  }
}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

body{
  font-family: 'Space Grotesk', sans-serif;
}

h1 {
  color: antiquewhite;
  padding-left: 20px;
}.icon-ele {
  margin-right: 10%;
  color: aliceblue;
  font-size: 27px;
}
</style>