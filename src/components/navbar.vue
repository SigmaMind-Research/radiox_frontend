<template>
  <v-app-bar :elevation="2" color="#252529" class="nav">
    <h1>
      <button>RADIOX</button>
    </h1>
    <template v-slot:append>
      <v-btn class="icon-ele"> <v-icon icon="mdi-help-circle" /></v-btn>
      <v-menu transition="scroll-y-transition">
        <template v-slot:activator="{ props }">
          <v-btn class="icon-ele" v-bind="props"> <v-icon icon="mdi-account" /></v-btn>
        </template>
        <v-list>
          <v-list-item v-for="info in accoundinfo" :key="info" link>
            <v-list-item-title>{{ info }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      accoundinfo: ['Profile', 'Settings', 'Help', 'Send feedback', 'Sign out'],
      mode: false,
    }
  }
}
</script>

<style scoped>
h1 {
  color: antiquewhite;
  padding-left: 20px;
}

/* .tog{
  padding-left: 300px;
  font-weight: bold;
  color: aliceblue;
} */
/* .ico{
  position: relative;
  color: aliceblue;
  font-size: 20px;
  margin-left: auto;
  margin-right: 0;
} */
.icon-ele {
  margin-right: 10%;
  color: aliceblue;
  font-size: 27px;
}
</style>