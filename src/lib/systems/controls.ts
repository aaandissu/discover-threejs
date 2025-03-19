import { OrthographicCamera, PerspectiveCamera } from "three";
import { OrbitControls } from "three-orbitcontrols-ts";

class ExtendedOrbitControls extends OrbitControls {
  tick() {
    this.update();
  }
}

function createControls(
  camera: PerspectiveCamera | OrthographicCamera,
  canvas: HTMLElement
) {
  const controls = new ExtendedOrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.5;
  controls.autoRotate = true;
  controls.enableZoom = true;
  controls.minDistance = 5;
  controls.maxDistance = 20;

  controls.tick = () => controls.update();
  return controls;
}

export { createControls };
