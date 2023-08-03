<template>
  <v-app-bar :elevation="2" color="#111112" class="nav">
    <h1>
      <button>RADIOX</button>
    </h1>
    <template v-slot:append>
      <v-btn class="icon-ele"> <v-icon icon="mdi-help-circle" /></v-btn>
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="icon-ele" v-bind="props"> <v-icon icon="mdi-account" /></v-btn>
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
h1 {
  color: antiquewhite;
  padding-left: 20px;
}

/* .tog{
  padding-left: 300px;
  font-weight: bold;
  color: aliceblue;
} */
/* .ico{
  position: relative;
  color: aliceblue;
  font-size: 20px;
  margin-left: auto;
  margin-right: 0;
} */
.icon-ele {
  margin-right: 10%;
  color: aliceblue;
  font-size: 27px;
}
</style>