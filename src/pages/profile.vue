<template>
    <v-app>
        <v-card>
            <v-layout>
            <Navbar />
            <v-main>
                <h1>profile page</h1>
            </v-main>
            </v-layout>
        </v-card>
    </v-app>
</template>

<script>
import Navbar from '../components/navbar.vue'
export default{
    components: {
        Navbar
    }
}

</script>

<style>
</style>