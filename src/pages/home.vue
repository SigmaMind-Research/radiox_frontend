<template>
    <v-app>
        <v-card>
            <v-layout>
                <Navbar />
                <Main />
            </v-layout>
            <v-navigation-drawer v-model="drawer"  location="bottom" class="h-auto" temporary>
            </v-navigation-drawer>
        </v-card>
    </v-app>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Main from '../components/main.vue'

import apexchart from "vue3-apexcharts";
import bargrph from '../mixins/bargrph';
import axios from 'axios';

export default {
    name: 'home',
    data() {
        return {
            drawer:false,    
            viewTools: false
        }
    },
    components: {
        Navbar,
        Main,
        apexchart
    },
    beforeCreate(){   

        const check = localStorage.getItem("token0")
        if(check==null){
            console.log(check);
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

            axios.post(import.meta.env.VITE_BASE_URL + "auth/tokens","",{ headers: head})
            .then(response => {
                if(response.data.status == "success"){
                    localStorage.setItem("token0",response.data.Authorization[0])
                    localStorage.setItem("expire", Date.now()+10000)
                    this.$router.push({ name: 'home' })
                }
                else{
                    localStorage.removeItem("token1")
                    this.$router.push({ name: 'login' })
                }
            })
        }
        else{
            const authTkn = `Bearer ${(localStorage.getItem('token0'))}`;
                    const head0 = {
                    "content-type": 'any',
                    "Authorization": authTkn
                } 
                axios.post(import.meta.env.VITE_BASE_URL + "auth/splashscreen","",{ headers: head0 })
                .then(response =>{
                    if(response.data.status == "success"){
                        this.$router.push({ name: 'home' })
                        console.log(response.status);
                    }
                    else{
                        this.$router.push({name:'login'})
                    }
                })
                .catch(error =>{
                    console.log();
                    this.$router.push({ name: 'login' })
                    console.log('error is : ' + error);
                });    
            }         
        }
    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    mixins: [bargrph]
}
</script>

<style></style>