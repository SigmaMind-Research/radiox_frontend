<template>
  <v-main class="d-flex align-center justify-center" style="min-height:100vh; display: flex; background-color: black;">
    <input type="file" @change='uploadImage' style="opacity: 1; position: absolute; top: 0; left: 0; bottom: 0; right: 0; width: 100%; height:100%;"/>
    <h3 class="drag-place">click or drag and drop image here</h3>
    <v-progress-circular v-show="isLoading"
    id="is-loading" 
    color="blue-lighten-3"
    indeterminate
    :size="34"
    :width="126"
    ></v-progress-circular>
  <img :src="previewImage" :style="{ filter: 'brightness(' + briVal + '%) ' + 'contrast(' + conVal + '%)' }" alt=""
  class="samimg">
    <v-btn id="subb" v-show="sub && !reop && !cancelValue" variant="tonal" @click.stop=submitApi location="bottom"
        color="primary">Submit</v-btn>
    <v-btn id="subb" v-show="reop" variant="tonal" color="primary" @click="drawer = true" location="bottom">Reopen</v-btn>
    <v-btn id="subb" color="red" style="z-index: 3000;" v-show="cancelValue" @click="cancelReq" location="bottom">Cancel request</v-btn>
  </v-main>
  <Rightbar :reopen="reop" :cancel-value="cancelValue" @setImg="imgset" @subEmit="submitApi" @drawerEmit="drawer=true" @ifChange="drawer=false" @canc="cancelReq"/>

  <v-navigation-drawer color="#111112" width="420">
    <v-list>
      <v-list-item>
        <v-card id="toolContainer">
          <v-card id="card">
          <h2 class="toolbr">Toolbar</h2>
          </v-card>
          <v-card class="card">
            <div id="tool-label" > 
              <label for="brightness">Brightness</label>
              <label id="lab" for="briVal" location="">{{ (briVal - 100).toFixed(1) }}</label>
            </div>
              <v-slider v-model="briVal" :max="200" track-color="white" color="white"
              class="slid"></v-slider>
          </v-card>
          <v-card class="card">
            <div id="tool-label">
              <label for="contrast">Contrast</label>
              <label id="lab" for="briVal" location="">{{ (conVal - 100).toFixed(1) }}</label>
            </div>
              <v-slider v-model="conVal" :max="200" track-color="white" color="white"
            class="slid"></v-slider>
          </v-card>
        </v-card>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

  <v-navigation-drawer v-model="drawer" location="bottom" class="h-auto mt-pt-12" temporary>
    <v-sheet>
      <textarea id="txt" v-model="typedText" class="typewriter-text w-100" rows="10" :readonly="ifedit"></textarea>
      <v-spacer></v-spacer>
      <v-sheet class="d-flex flex-wrap">
        <v-btn class="flex-1-0 ma-2" color="secondary" @click="ifedit = !ifedit">Edit</v-btn>
        <v-btn class="flex-1-0 ma-2" color="primary" @click.stop="drawer = false">Close</v-btn>
      </v-sheet>
    </v-sheet>
  </v-navigation-drawer>

  <div v-if="!viewTools">
    <Footer ref="submitApiFun" id="footerset" @close="viewTools = true" @setImg="imgset" />
  </div>
  <div v-if="viewTools" id="footerset">
    <v-bottom-navigation v-model="value" color="blue" class="overflow-visible" style="height: 56px;" grow>
      <v-row justify="center">
        <v-menu transition="scroll-y-reverse-transition">
          <template v-slot:activator="{ props }">
              <v-btn class="ma-1" v-bind="props" @click="viewTools=false">
                  <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/windows/32/FFFFFF/circled-left-2.png" alt="back"/>
                  Back
              </v-btn>
          </template>
        </v-menu>
        <v-menu transition="scroll-y-reverse-transition" width="300px" :close-on-content-click="false">
          <template v-slot:activator="{ props }">
              <v-btn class="ma-1" v-bind="props">
                  <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/brightness-settings.png" alt="brightness-settings"/>
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
              <v-btn class="ma-1" v-bind="props">
                  <img class="ml-3 mb-1" width="38" height="25" src="https://img.icons8.com/fluency-systems-filled/48/FFFFFF/contrast--v2.png" alt="contrast--v2"/>
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
      <v-snackbar v-model="snackbar" :timeout="timeout" color="#F9F3CC">
        Please select a x-ray image first
        <template v-slot:actions>
          <v-btn color="blue" variant="text" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      
    <v-alert class="alert-err" v-model="errAlrt" :timeout="timeout"
    color="error"
    icon="$error"
    title="Connection error"
    text="Something went wrong while retrieving data. Please try again..."
  ></v-alert>

</template>

<script>
import {computed} from 'vue'
import Rightbar from './rightbar.vue'
import Footer from './footer.vue'
import upload from '../mixins/upload'
import submit from '../mixins/submit'
import typingEff from '../mixins/typingEff'

export default {
  data() {
    return {
      previewImage: '',
      imageData:null,
      imgD:null,
      viewTools: false,
      drawer: false,
      group: null,
      bt: 100,
      cont: 100,
      sub: false,
      briVal: 100,
      conVal: 100,
      value: '',
      ifedit:true,
      originalTexts: [],
      currentTextIndex: 0,
      typedText: "",
      currentPosition: 0,
      reop:false,
      isLoading:false,
      snackbar: false,
      timeout: 2000,
      errAlrt:false,
      cancelValue:false
    }
  },
  provide(){
    return{
      imgD:computed(() => this.imgD)
    }
  },
  computed:{
    imgName(){
      return JSON.stringify(this.imgD)
    }
  },
  methods: {
    imgset({name,nameData}) {
      this.previewImage = name;
      this.imgD = nameData;
      this.sub = true;
      this.reop=false

    },
    submitFun(){
      this.$refs.submitApiFun.submitApi();
      this.drawer = true;
    }
  },
    components: {
    Rightbar,
    Footer,
  },
  watch: {
    group() {
      this.drawer = false
    },
    errAlrt(new_val) {
      if (new_val) {
        setTimeout(() => { this.errAlrt = false }, 4000)
      }
    }
  },
   mixins: [upload,submit,typingEff],
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');
@import url('/asset/mainstyle.css');

body{
  font-family: 'Space Grotesk', sans-serif;
}

.samimg {
  width: 100%;
  height:fit-content;
  max-height: 100vh;
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

.drag-place{
  position: absolute;
}

#card {
  /* color: white; */
  /* background-color: #434242; */
  margin: 0px 5px 22px;
  border-radius: 12px;
}
#card .toolbr{
  background-color:#111112;
}
#toolContainer{
  padding: 20px;
  border-radius:20px;
}
#tool-label{
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  display:flex;
  padding: 20px 30px ;
  justify-content: space-between;
}
.slid {
  padding: 15px 25px;
}
.toolbr {
  text-align: center;
  padding: 6px;
}
#txt{
  overflow-y: auto;
}
#is-loading{
  position: absolute;
  align-self: center;
  background-color: rgba(25, 23, 23,0.7);
  /* padding:20% 25%; */
  height: 100% !important;
  width: 100% !important;
  z-index: 1;

}
.alert-err{
  position: absolute !important;
  z-index: 2000;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 80px;
}
@media screen and (min-width:1280px) {
  #footerset {
    display: none;
  }

  #subb {
    display: none;
  }
}
@media screen and (max-width:1280px){
.alert-err{
  font-size: 0.85rem;
  margin: 80px 6%;
  left: 0;
  transform: translateX(0)
}
}
</style>