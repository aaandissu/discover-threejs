import {
  Color,
  Mesh,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { createCamera } from "./scene/Camera";
// import { createCube } from "./objects/Cube";
import { createMeshGroup } from "./objects/meshGroup";
import { createScene } from "./scene/Scene";
import { createLights } from "./scene/Lights";

import { createRenderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import { createControls } from "./systems/controls";
import { createAxesHelper, createGridHelper } from "./scene/Helpers";
import { loadDucky } from "./objects/ducky/ducky";
import { loadParrot } from "./objects/parrot/parrot";

let camera: PerspectiveCamera | OrthographicCamera;
let renderer: WebGLRenderer;
let scene: Scene;
let loop: Loop;

export default class SceneManager {
  constructor(container: HTMLElement) {
    // Create a scene
    scene = createScene();
    scene.background = new Color("skyblue");

    // Create a camera
    camera = createCamera();

    // Create a cube
    // const cube = createCube();
    // create a mesh group
    const meshGroup = createMeshGroup();
    // Create a light
    const { ambientLight, mainLight } = createLights();
    // scene.add(cube, ambientLight, mainLight);
    // scene.add(meshGroup, ambientLight, mainLight);
    scene.add(ambientLight, mainLight);
    scene.add(createAxesHelper(), createGridHelper());

    // Create a renderer
    renderer = createRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Create a loop
    loop = new Loop(camera, scene, renderer);
    // loop.updatables.push(cube);

    loop.updatables.push(meshGroup);

    // Render the scene
    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
    const controls = createControls(camera, renderer.domElement);
    (controls as any).addEventListener("change", () => this.render());
    loop.updatables.push(controls);
  }

  async init() {
    //const { duckyMesh } = await loadDucky();
    //scene.add(duckyMesh);
    const { parrotMesh } = await loadParrot();
    scene.add(parrotMesh);
    loop.updatables.push(parrotMesh);
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  // Cleanup method to dispose of resources
  cleanup() {
    renderer.dispose();
  }
}
