import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";

import { Mesh, MeshStandardMaterial, TextureLoader } from "three";

import parrotPath from "@/assets/models/Parrot.glb";

async function loadParrot() {
  const loader = new GLTFLoader();
  const parrotData = await loader.loadAsync(parrotPath);

  console.log("A-Arara-a", parrotData);

  const parrot = setupModel(parrotData);

  const parrotMesh = parrot;
  parrotMesh.castShadow = true;
  parrotMesh.receiveShadow = true;

  return { parrotMesh };
}

export { loadParrot };
