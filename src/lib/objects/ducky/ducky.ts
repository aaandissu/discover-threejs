import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";

import { Mesh, MeshStandardMaterial, TextureLoader } from "three";

import duckyPath from "@/assets/models/rubberducky.glb";
import duckyColor from "@/assets/textures/DuckyBaseColor.png";
import duckyRoughness from "@/assets/textures/DuckyRoughness.png";
import duckyHeight from "@/assets/textures/DuckyHeight.png";

async function loadDucky() {
  const loader = new GLTFLoader();
  const duckyData = await loader.loadAsync(duckyPath);

  console.log("Quack-quack", duckyData);

  const ducky = setupModel(duckyData);

  const textureLoader = new TextureLoader();
  const DuckyBaseColor = textureLoader.load(duckyColor);
  DuckyBaseColor.flipY = false;
  const DuckyRoughness = textureLoader.load(duckyRoughness);
  DuckyRoughness.flipY = false;
  const DuckyHeight = textureLoader.load(duckyHeight);
  DuckyHeight.flipY = false;

  const duckyMat = new MeshStandardMaterial({
    map: DuckyBaseColor,
    roughnessMap: DuckyRoughness,
    bumpMap: DuckyHeight,
  });

  const duckyMesh = new Mesh(ducky.geometry, duckyMat);
  duckyMesh.castShadow = true;
  duckyMesh.receiveShadow = true;

  return { duckyMesh };
}

export { loadDucky };
