<template>
  <v-app>
    <v-card>
      <v-layout>
        <Navbar />
        <Sidebar />
        <Rightbar />
        <Main />
      </v-layout>
      <Footer v-show="!viewTools" @close="viewTools = true" />
      <Tools v-show="viewTools" @close="viewTools = false" />
    </v-card>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import Main from './components/main.vue'
import Rightbar from './components/rightbar.vue'
import Footer from './components/footer.vue'
import Tools from './components/toolsfooter.vue'

export default {
  data() {
    return {
      viewTools: false
    }
  },
  components: {
    Navbar,
    Sidebar,
    Main,
    Rightbar,
    Footer,
    Tools
  }
}
</script>

<style></style>