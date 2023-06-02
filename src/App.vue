<template>
  <v-app>
    <v-card>
      <v-layout>
        <Navbar />
        <Main />
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
import Navbar from './components/navbar.vue'
import Main from './components/main.vue'

export default {
  data() {
    return {
      viewTools: false
    }
  },
  components: {
    Navbar,
    Main,
  }
}
</script>

<style></style>