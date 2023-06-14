<template>
  <Sidebar @brig="bright" @cont="contrast" />
  <v-main style="min-height:100vh" color="#252529">
    <img :src="previewImage" :style="{ filter: 'brightness(' + bt + '%) ' + 'contrast(' + cont + '%)' }" alt=""
      class="samimg">
    <v-btn id="subb" variant="tonal" @click.stop="drawer = true" v-show="sub" location="bottom"
      color="primary">Submit</v-btn>
  </v-main>

  <Rightbar @setImg="imgset" />

  <v-navigation-drawer v-model="drawer" location="bottom" class="h-auto" temporary>
    <v-container class="info">
      <div id="chart">
        <apexchart type="bar" height="550" :options="chartOptions" :series="series"></apexchart>
      </div>
    </v-container>
    <v-btn color="primary" location="center" @click.stop="drawer = false">Close</v-btn>
  </v-navigation-drawer>

  <div v-if="!viewTools">
    <Footer id="footerset" @close="viewTools = true" @setImg="imgset" />
  </div>
  <div v-if="viewTools">
    <Tools id="footerset" @close="viewTools = false" @brig="bright" @cont="contrast" />
  </div>
</template>

<script>
import Sidebar from './sidebar.vue'
import Rightbar from './rightbar.vue'
import Footer from './footer.vue'
import Tools from './toolsfooter.vue'

import apexchart from "vue3-apexcharts";
import bargrph from '../mixins/bargrph';
export default {
  data() {
    return {
      previewImage: "",
      viewTools: false,
      drawer: false,
      group: null,
      bt: 100,
      cont: 100,
      sub: false,
    }
  },
  components: {
    Sidebar,
    Rightbar,
    Footer,
    Tools,
    apexchart
  },
  methods: {
    imgset(name) {
      this.previewImage = name;
      this.sub = true;
    },
    bright(value) {
      this.bt = value * 2 + 20;
      console.log(value * 2 + 20);
    },
    contrast(value) {
      this.cont = value * 2 + 20;
      console.log(value * 2 + 20);
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  mixins: [bargrph],
}
</script>
<style>
.samimg {
  width: 100%;
  height: 110%;
  padding: 3px;
}

#subb {
  position: absolute;
  margin: auto;
  margin-bottom: 65px;
  padding: 0 30px;
}

@media screen and (min-width:1280px) {
  #footerset {
    display: none;
  }

  #subb {
    display: none;
  }
}</style>