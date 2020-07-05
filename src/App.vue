<template>
  <div id="app">
    <div id="nav">
      <mnavbar>
      </mnavbar>  
    </div>
    <router-view />
  </div>
</template>

<script>

import mnavbar from "@/components/navigationBar.vue";

export default {
  components: {
    mnavbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
