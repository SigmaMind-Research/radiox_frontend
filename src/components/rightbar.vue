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
             <textarea rows="18" cols="102" variant="outlined">
              Impression: {{ imp }}
              Findings: {{ finds }}
              Additional Observations: {{ addObs }}
            </textarea>
        </v-sheet>
      </v-sheet>
      <div class="">
        <v-btn color="primary" location="center" @click.stop="drawer = false">Close</v-btn>
      </div>
    </v-navigation-drawer>
</template>

<script>
import upload from "../mixins/upload";
import submit from "../mixins/submit"

export default {
  data() {
    return {
      previewImage: '',
      drawer: false,
      group: null,
      imp: 'Empty',
      finds: 'Empty',
      addObs: 'Empty',
    }
  },
  inject:["imgD"],
  watch: {
    group() {
      this.drawer = false
    },
  },
  emits: ['setImg'],
  mixins: [upload,submit],
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
</style>