import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

export default class MyScene {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  cube: Mesh;

  constructor(container: HTMLElement) {
    // Create a scene
    this.scene = new Scene();
    this.scene.background = new Color("skyblue");

    // Create a camera
    const fov = 35; // Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // Near clipping plane
    const far = 100; // Far clipping plane
    this.camera = new PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 10);

    // Create a cube
    const geometry = new BoxGeometry(2, 2, 2);
    const material = new MeshBasicMaterial({ color: "ffffff" });
    this.cube = new Mesh(geometry, material);
    this.scene.add(this.cube);

    // Create a renderer
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(this.renderer.domElement);

    // Render the scene
    this.renderer.render(this.scene, this.camera);
  }

  // Cleanup method to dispose of resources
  cleanup() {
    this.renderer.dispose();
  }
}
