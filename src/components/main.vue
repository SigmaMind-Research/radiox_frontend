<template>
  <v-navigation-drawer color="#1e1e20" width="420">
      <v-list>
        <v-list-item>
          <v-card id="card" variant="toned">
            <h2 class="toolbr">Toolbar</h2>
          </v-card>
          <v-card id="card" title="Brightness" variant="toned">
            <label id="lab" for="briVal" location="">{{ (briVal - 100).toFixed(1) }}</label>
            <v-slider v-model="briVal" :max="200" track-color="white" color="white"
              class="slid"></v-slider>
          </v-card>
          <v-card id="card" title="Contrast" variant="toned">
            <label id="lab" for="briVal" location="">{{ (conVal - 100).toFixed(1) }}</label>
            <v-slider v-model="conVal" :max="200" track-color="white" color="white"
              class="slid"></v-slider>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  <v-main style="min-height:100vh; display: flex;" color="#252529">
          <img :src="previewImage" :style="{ filter: 'brightness(' + briVal + '%) ' + 'contrast(' + conVal + '%)' }" alt=""
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
    <v-bottom-navigation v-model="value" color="blue" class="overflow-visible" style="height: 56px;" grow>
          <v-row justify="center">
              <v-menu transition="scroll-y-reverse-transition">
                  <template v-slot:activator="{ props }">
                      <v-btn class="ma-2" v-bind="props" @click="viewTools=false">
                          <v-icon icon="mdi-undo-variant" />
                          Back
                      </v-btn>
                  </template>
              </v-menu>
              <v-menu transition="scroll-y-reverse-transition" width="300px" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                      <v-btn class="ma-2" v-bind="props">
                          <v-icon>mdi-brightness-6</v-icon>
                          Brightness
                      </v-btn>
                  </template>
                  <v-list>
                      <v-list-item>
                          <v-slider v-model="briVal" :max="200" track-color="white" color="white"
                              class="slid" style="padding-top: 7px"></v-slider>
                          <h3 style="text-align:center">Brigntness: {{ (briVal - 100).toFixed(1) }}</h3>
                      </v-list-item>
                  </v-list>
              </v-menu>

              <v-menu transition="scroll-y-reverse-transition" width="300px" :close-on-content-click="false">
                  <template v-slot:activator="{ props }">
                      <v-btn class="ma-2" v-bind="props">
                          <v-icon icon="mdi-contrast-circle" />
                          Contrast
                      </v-btn>
                  </template>
                  <v-list>
                      <v-list-item>
                          <v-slider v-model="conVal" :max="200" track-color="white" color="white"
                              class="slid" style="padding-top: 7px"></v-slider>
                          <h3 style="text-align:center">Contrast: {{ (conVal - 100).toFixed(1) }}</h3>
                      </v-list-item>
                  </v-list>
              </v-menu>
          </v-row>

      </v-bottom-navigation>
  </div>
</template>

<script>
import Rightbar from './rightbar.vue'
import Footer from './footer.vue'

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
      briVal: 100,
      conVal: 100,
      value: '',
    }
  },
  components: {
    Rightbar,
    Footer,
    apexchart
  },
  methods: {
    imgset(name) {
      this.previewImage = name;
      this.sub = true;
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  emits:['close'],
  mixins: [bargrph],
}
</script>
<style>
.samimg {
  width: 100%;
  height:fit-content;
   align-self: center;
  padding: 10px;
}

#subb {
  position: absolute;
  margin: auto;
  margin-bottom: 65px;
  padding: 0 30px;
}

#myFileInput {
    display: none;
}

#card {
  color: white;
  background-color: #323643;
  margin: 0px 5px 22px;
}

.slid {
  padding: 30px 30px;
}

.toolbr {
  text-align: center;
  padding: 6px;
}

#lab {
  margin-left: 80%;

}
@media screen and (min-width:1280px) {
  #footerset {
    display: none;
  }

  #subb {
    display: none;
  }
}</style>