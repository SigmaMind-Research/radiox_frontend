<template>
  <v-app>
    <v-card>
      <v-layout>
        <Navbar />
        <Sidebar/>
        <Rightbar/>
        <Main/>
      </v-layout>
      <Footer/>
    </v-card>
  </v-app>
  </template>

<script>
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import Main from './components/main.vue'
import Rightbar from './components/rightbar.vue'
import Footer from './components/footer.vue'

export default {
  components:{
  Navbar,
  Sidebar,
  Main,
  Rightbar,
  Footer
}
}
</script>

<style>

</style>