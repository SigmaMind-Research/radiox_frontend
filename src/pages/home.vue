<template>
  <v-app>
    <Navbar />
    <Main />
  </v-app>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Main from '../components/main.vue'

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