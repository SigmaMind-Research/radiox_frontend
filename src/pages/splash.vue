<template>
    <v-app>
        <div class="splash d-flex h-100 w-100">
            <v-progress-circular class="ma-auto" location="bottom" color="green" indeterminate size="64"></v-progress-circular>
        </div>
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
            drawer: false,
            viewTools: false,
        }
    },
    components: {
        Navbar,
        Main,
    },
    mounted() {

        const checkAT = localStorage.getItem("token0")
        const checkRT = localStorage.getItem("token1")
        if (checkAT === null || checkRT == null) {
            this.$router.push({ name: 'login' })
        }

        else {
            const head = {
                "Authorization": `Bearer ${localStorage.getItem('token1')}`
            }

            const exp = localStorage.getItem("expire")
            if (Date.now() > exp) {
                localStorage.removeItem("token0")
                localStorage.removeItem("expire")

                axios.post(import.meta.env.VITE_BASE_URL + "/auth/tokens/", "", { headers: head })
                    .then(response => {
                        if (response.data.status == "success") {
                            localStorage.setItem("token0", response.data.Authorization[0])
                            localStorage.setItem("expire", Date.now() + 1000 * 60 * 60 * 24)
                            this.$router.push({ name: 'home' })
                        }
                        else {
                            localStorage.removeItem("token0")
                            localStorage.removeItem("token1");
                            localStorage.removeItem("expire");
                            this.$router.push({ name: 'login' })
                        }
                    })
                    .catch(() => {
                        this.$router.push({ name: 'login' })
                    });
            }
            else {
                axios.post(import.meta.env.VITE_BASE_URL + "/auth/splashscreen/", "", { headers: head })
                    .then(response => {
                        if (response.data.status == "success") {
                            this.$router.push({ name: 'home' })
                        }
                        else {
                            this.$router.push({ name: 'login' })
                        }
                    })
                    .catch(() => {
                        this.$router.push({ name: 'login' })
                    });
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
.splash{
    background: #1b4d3e;
}
</style>