<template>
  <div id="app">
    <ThreeScene />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThreeScene from "./components/ThreeScene.vue";

export default defineComponent({
  name: "App",
  components: {
    ThreeScene,
  },
});
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
