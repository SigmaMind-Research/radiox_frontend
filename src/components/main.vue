<template>
  <v-main style="min-height:750px" color="#252529">
    <!-- <img class="samimg" src="/sampleimage.jpeg" alt=""> -->
    <img :src="previewImage" alt="" class="samimg">
  </v-main>
  <Rightbar @setImg="imgset" />
</template>

<script>
import Rightbar from './rightbar.vue'
export default {
  data() {
    return {
      previewImage: ""
    }
  },
  components: {
    Rightbar
  },
  methods: {
    imgset(name) {
      this.previewImage = name;
    }
  },
}
</script>
<style>
.samimg {
  width: 100%;
  height: 100%;
  padding: 3px;
}
</style>