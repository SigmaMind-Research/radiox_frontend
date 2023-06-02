<template>
  <v-navigation-drawer width="420" color="#1e1e20" location="right" class="leftside">
    <v-list>
      <v-list-item>
        <v-card id="card" title="Upload image" text="Please upload your x-ray image here.">
          <div class="upload">
            <v-file-input accept="image/png, image/jpeg, image/bmp"
              @change="uploadImage($event), $emit('setImg', previewImage)" placeholder="upload x-ray ...."
              prepend-icon="mdi-camera" label="Upload x-ray here"></v-file-input>
            <v-btn location="center" @click="" color="primary">upload</v-btn>
            <v-card-actions>
              <v-btn id="subbtn" variant="tonal" @click.stop="drawer = true">Submit</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

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
</template>

<script>
export default {
  data() {
    return {

      drawer: false,
      group: null,
      // previewImage: null,
    }
  },
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = e => {
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      };
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  emits: ['setImg']
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