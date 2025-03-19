import {
  Color,
  Mesh,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

import { createCamera } from "./scene/Camera";
import { createCube } from "./objects/Cube";
import { createScene } from "./scene/Scene";
import { createLights } from "./scene/Lights";

import { createRenderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import { createControls } from "./systems/controls";

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
    const cube = createCube();
    // Create a light
    const { ambientLight, mainLight } = createLights();
    scene.add(cube, ambientLight, mainLight);

    // Create a renderer
    renderer = createRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create a loop
    loop = new Loop(camera, scene, renderer);
    // loop.updatables.push(cube);

    // Render the scene
    const resizer = new Resizer(container, camera, renderer);
    // resizer.onResize = () => {
    //   this.render();
    // };
    const controls = createControls(camera, renderer.domElement);
    (controls as any).addEventListener("change", () => this.render());
    loop.updatables.push(controls);
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
