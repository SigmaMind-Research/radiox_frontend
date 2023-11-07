<template>
  <v-app>
      <v-overlay
          :model-value="overlay"
          class="align-center justify-center"
          style="background-color: #030f01;"
      >
        <v-progress-circular
            indeterminate
            size="64"
        ></v-progress-circular>
      </v-overlay>
    <Navbar />
    <Main />
  </v-app>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Main from '../components/main.vue'
import axios from 'axios';

export default {
    name: 'home',
    data() {
        return {
            drawer:false,    
            viewTools: false,
            overlay:true
        }
    },
    components: {
        Navbar,
        Main,
    },
    mounted(){   

        const checkAT = localStorage.getItem("token0")
        const checkRT = localStorage.getItem("token1")
        if(checkAT===null || checkRT==null){
            this.$router.push({name:'login'})
        }

        else{
        const head = {
            "Authorization": `Bearer ${localStorage.getItem('token1')}`
        }

        const exp = localStorage.getItem("expire")
        if (Date.now() > exp) {
            localStorage.removeItem("token0")
            localStorage.removeItem("expire")

            axios.post(import.meta.env.VITE_BASE_URL + "/auth/tokens/","",{ headers: head})
            .then(response => {
                if(response.data.status == "success"){
                    localStorage.setItem("token0",response.data.Authorization[0])
                    localStorage.setItem("expire", Date.now() + 1000 * 60 * 60 * 24)
                    this.$router.push({ name: 'home' })
                    setTimeout(() => this.overlay = false, 800);
                }
                else{
                    localStorage.removeItem("token1")
                    this.$router.push({ name: 'login' })
                }
            })
            .catch(error => {
                        this.$router.push({ name: 'login' })
                        console.log('error is : ' + error);
                    });
        }
        else{
            if(checkAT === null || checkRT == null){
              this.$router.push({ name: 'login' })  
            }
            else{
                const head0 = {
                "content-type": 'any',
                "Authorization": `Bearer ${checkAT}`
                } 
                axios.post(import.meta.env.VITE_BASE_URL + "/auth/splashscreen/","",{ headers: head0 })
                .then(response =>{
                    if(response.data.status == "success"){
                        this.$router.push({ name: 'home' })
                        setTimeout(() => this.overlay = false, 800);
                    }
                    else{
                        this.$router.push({name:'login'})
                    }
                })
                .catch(error =>{
                this.$router.push({ name: 'login' })
                console.log('error is : ' + error);
                 });    
            }
        }         
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style>

</style>