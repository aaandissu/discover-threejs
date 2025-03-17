<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import SceneManager from "@/lib/SceneManager";
// import World from "@/lib/";

export default defineComponent({
  name: "ThreeScene",
  setup() {
    const threeContainer = ref<HTMLElement | null>(null);
    let scene: SceneManager;

    onMounted(() => {
      if (threeContainer.value) {
        // Initialize the Three.js scene
        scene = new SceneManager(threeContainer.value);
        scene.render();
        scene.start();
      }
    });

    onUnmounted(() => {
      if (scene) {
        // Clean up the Three.js scene
        scene.cleanup();
      }
    });

    return {
      threeContainer,
    };
  },
});
</script>

<style scoped>
.three-container {
  width: 100vw;
  height: 100vh;
}
</style>
