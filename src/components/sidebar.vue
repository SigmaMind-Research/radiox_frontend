<template>
  <v-navigation-drawer color="#1e1e20" width="420">
    
    <v-list>
      <v-list-item >
        <v-card id="card" variant="toned">
          <h2 class="toolbr">Toolbar</h2>
        </v-card>
        <v-card id="card" title="Brightness" variant="toned">
               <v-slider v-model="briVal" track-color="white" color="white" class="slid"></v-slider>
                <!-- <v-card-actions>
                <v-btn>Click me</v-btn>
                </v-card-actions> -->
             </v-card>
              <v-card id="card" title="Contrast" variant="toned">
                 <v-slider v-model="conVal" track-color="white" color="white" class="slid"></v-slider>
                  <!-- <v-card-actions>
                <v-btn>Click me</v-btn>
                </v-card-actions> -->
              </v-card>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      briVal:50,
      conVal:50,
    }
  }
}
</script>

<style scoped>
#card{
  color:white;
  background-color: #323643;
  margin: 0px 5px 22px;
}
.slid{
  padding: 30px 30px;
}
.toolbr{
  text-align: center;
  padding: 6px;
}
</style>