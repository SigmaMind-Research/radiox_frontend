<template>
  <v-navigation-drawer width="420" color="#1e1e20" location="right" class="leftside">
        <v-list>
          <v-list-item>
                        <v-card id="card" title="Upload image" text="Please upload your x-ray image here. " variant="toned">
                          <div class="upload">
                          <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                           placeholder="upload x-ray ...." prepend-icon="mdi-camera" label="Upload x-ray here"></v-file-input>
                  <v-card-actions>
                <v-btn id="subbtn" variant="tonal">Upload</v-btn>
                </v-card-actions>
                </div>
               </v-card>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

</template>

<script>
export default {

}
</script>

<style >
#rightp{
  color: aliceblue;
    border:solid black;
    height: 100%;
    width: 15%;
}
/* #card{
  color:white;
  background-color: #323643;
  margin: 20px 5px;
} */
.upload{
  margin: 10px 20px;
}
#subbtn{
  margin: auto ;
  padding: 0 30px;
}
</style>