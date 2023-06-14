<template>
  <v-navigation-drawer width="420" color="#1e1e20" location="right" class="leftside">
    <v-list>
      <v-list-item>
        <v-card id="card" title="Upload image" text="Please upload your x-ray image here.">
          <div class="upload">
            <v-file-input accept="image/png, image/jpeg, image/bmp" @change="uploadImage($event)"
              placeholder="upload x-ray ...." prepend-icon="mdi-camera" label="Upload x-ray here"></v-file-input>
            <v-card-actions>
              <v-btn id="subbtn" variant="tonal" @click.stop="drawer = true">Submit</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-navigation-drawer v-model="drawer" location="bottom" class="h-auto" temporary>
    <div id="chart">
      <apexchart type="bar" height="750" :options="chartOptions" :series="series"></apexchart>
    </div>
    <v-btn color="primary" location="center" @click.stop="drawer = false">Close</v-btn>
  </v-navigation-drawer>
</template>

<script>
import apexchart from "vue3-apexcharts";
import bargrph from "../mixins/bargrph";
import upload from '../mixins/upload'
export default {
  data() {
    return {

      drawer: false,
      group: null,
    }
  },
  components: {
    apexchart
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  emits: ['setImg'],
  mixins: [bargrph, upload],
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