<template>
  <v-navigation-drawer width="420" color="#111112" location="right" class="leftside">
    <v-list>
      <v-list-item>
        <v-card id="card" title="Upload image" text="Please upload your x-ray image here.">
          <div class="upload">
            <v-file-input accept="image/png, image/jpeg, image/dcm" @change="uploadImage"
              placeholder="upload x-ray ...." prepend-icon="mdi-camera" label="Upload x-ray here"></v-file-input>
            <v-card-actions>
              <v-btn id="subbtn" variant="tonal" @click="submitApi">Submit</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer" color="#111112"  location="bottom" class="h-auto w-100 d-flex flex-wrap" style='z-index:2000' temporary>
      <v-sheet class="d-flex">
        <v-sheet width="50%">
          <img :src="previewImage" alt="" class="samimg h-auto ">
        </v-sheet>
        <v-sheet width="50%">
            <textarea class="typewriter-text w-100" rows="14" :readonly="ifedit">{{ typedText }}</textarea>
            <v-spacer></v-spacer>
            <v-btn color="secondary" location="top" @click="ifedit=!ifedit">Edit</v-btn>
          </v-sheet>
      </v-sheet>
      <div class="">
        <v-btn color="primary" location="center" @click.stop="drawer = false">Close</v-btn>
      </div>
    </v-navigation-drawer>
  </template>

<script>
// import '../assets/made'
import upload from "../mixins/upload";
import submit from "../mixins/submit"
import typingEff from "../mixins/typingEff";

export default {
  data() {
    return {
      previewImage: '',
      drawer: false,
      group: null,
      ifedit:false,
      originalTexts: [],
      currentTextIndex: 0,
      typedText: "",
      currentPosition: 0,
    };
  },
  inject:["imgD"],
  watch: {
    group() {
      this.drawer = false
    },
  },
  emits: ['setImg'],
  mixins: [upload,submit,typingEff],
  mounted() {
    this.startTyping();
  },
}
</script>

<style >
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