import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
  MathUtils,
} from "three";
import uvTexture from "@/assets/textures/uv-test-col.png";
import bwTexture from "@/assets/textures/uv-test-bw.png";

interface Tickable {
  tick: (delta: number) => void;
}

type TickableMesh = Mesh<BoxGeometry, MeshStandardMaterial> & Tickable;

const radiansPerSec = MathUtils.degToRad(30);

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load(bwTexture);

  const material = new MeshStandardMaterial({
    map: texture,
    roughnessMap: texture,
  });
  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(1, 1, 1);

  // create a default (white) Basic material
  const material = createMaterial();

  const cube = new Mesh(geometry, material) as TickableMesh;
  cube.rotation.set(-0.5, -0.1, 0.8);

  cube.tick = (delta: number) => {
    cube.rotation.z += radiansPerSec * delta;
    cube.rotation.x += radiansPerSec * delta;
    cube.rotation.y += radiansPerSec * delta;
  };

  return cube;
}

export { createCube };
