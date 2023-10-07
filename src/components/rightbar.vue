<template>
  <v-navigation-drawer width="420" color="#111112" location="right" class="leftside">
    <v-list>
      <v-list-item>
        <v-card id="card" title="Upload image" text="Please upload your x-ray image here.">
          <div class="upload">
            <v-file-input accept="image/png, image/jpeg, image/dcm" @change="uploadImage" @click="$emit('ifChange')"
              placeholder="upload x-ray ...." prepend-icon="mdi-camera" label="Upload x-ray here"></v-file-input>
            <v-card-actions>
              <v-btn id="subbtn" :disabled="dis" variant="tonal" color="secondary" @click="$emit('subEmit')" >Submit</v-btn>
              <v-btn id="subbtn" v-show="reopen" variant="tonal" color="primary" @click="$emit('drawerEmit')" >Reopen</v-btn>
            </v-card-actions>
          </div>
        </v-card>
            <v-btn variant="tonal" location="top" color="red" v-show="cancelValue" @click="$emit('canc')" >Cancel request</v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </template>

<script>
// import '../assets/made'
import upload from "../mixins/upload";
import typingEff from "../mixins/typingEff";

export default {
  props:['reopen','cancel-value'],
  data() {
    return {
      // previewImage: '',
      // drawer: false,
      // group: null,
      // ifedit:false,
      originalTexts: [],
      // currentTextIndex: 0,
      // typedText: "",
      // currentPosition: 0,
      dis:false,
    };
  },
  inject:["imgD"],
  watch: {
    group() {
      this.drawer = false
    },
  },
  mixins: [upload,typingEff],
  mounted() {
    this.startTyping();
  },
  // emits: ['ifChange', 'subEmit']
}
</script>

<style >

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');

body{
  font-family: 'Space Grotesk', sans-serif;
}

#rightp {
  color: aliceblue;
  border: solid black;
  height: 100%;
  width: 15%;
}

.upload {
  margin: 10px 20px;
}

#subbtn {
  margin: auto;
  padding: 0 30px;
}

.info {
  margin: 3%;
}

.rows {
  padding: 1.5%;
}
.typewriter-text {
  display: inline-block;
  overflow: hidden;
  white-space: wrap;
  font-size: 1.5em;
  margin: 0 auto;
  padding: 0 0.25em;
}
</style>