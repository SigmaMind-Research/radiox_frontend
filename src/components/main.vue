<template>
  <Sidebar />
  <v-main style="min-height:100vh" color="#252529">
    <img :src="previewImage" alt="" class="samimg">
    <v-btn id="subbtn" variant="tonal" @click.stop="drawer = true" v-show="sub" location="bottom"
      color="primary">Submit</v-btn>
  </v-main>

  <v-navigation-drawer v-model="drawer" location="bottom" class="h-auto" temporary>
    <v-container class="info">
      <v-row class="rows" no-gutters>
        <v-col cols="2">
          <label for="Char1">Char1</label>
        </v-col>
        <v-col>
          <v-sheet>
            <v-slider readonly="true"></v-slider> </v-sheet>
        </v-col>
      </v-row>
      <v-row class="rows" no-gutters>
        <v-col cols="2">
          <label for="Char2">Char2</label>
        </v-col>
        <v-col>
          <v-sheet>
            <v-slider readonly="true"></v-slider> </v-sheet>
        </v-col>
      </v-row>
      <v-row class="rows" no-gutters>
        <v-col cols="2">
          <label for="Char3">Char3</label>
        </v-col>
        <v-col>
          <v-sheet>
            <v-slider readonly="true"></v-slider> </v-sheet>
        </v-col>
      </v-row>
      <v-row class="rows" no-gutters>
        <v-col cols="2">
          <label for="Char4">Char4</label>
        </v-col>
        <v-col>
          <v-sheet>
            <v-slider readonly="true"></v-slider> </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="primary" location="center" @click.stop="drawer = false">Close</v-btn>
  </v-navigation-drawer>
  <Rightbar @setImg="imgset" />
  <Footer id="footerset" v-show="!viewTools" @close="viewTools = true" @setImg="imgset" />
  <Tools id="footerset" v-show="viewTools" @close="viewTools = false" />
</template>

<script>
import Sidebar from './sidebar.vue'
import Rightbar from './rightbar.vue'
import Footer from './footer.vue'
import Tools from './toolsfooter.vue'
export default {
  data() {
    return {
      previewImage: "",
      viewTools: false,
      drawer: false,
      group: null,
      sub: false
    }
  },
  components: {
    Sidebar,
    Rightbar,
    Footer,
    Tools
  },
  methods: {
    imgset(name) {
      this.previewImage = name;
      this.sub = true;
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
.samimg {
  width: 100%;
  height: 110%;
  padding: 3px;
}

@media screen and (min-width:1224px) {
  #footerset {
    display: none;
  }
}
</style>