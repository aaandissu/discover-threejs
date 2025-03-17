import { OrthographicCamera, PerspectiveCamera, WebGLRenderer } from "three";

const setSize = (
  container: HTMLElement,
  camera: PerspectiveCamera | OrthographicCamera,
  renderer: WebGLRenderer
) => {
  if (camera instanceof PerspectiveCamera) {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  }
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
  constructor(
    container: HTMLElement,
    camera: PerspectiveCamera | OrthographicCamera,
    renderer: WebGLRenderer
  ) {
    setSize(container, camera, renderer);

    window.addEventListener("resize", () => {
      setSize(container, camera, renderer);
      this.onResize();
    });
  }

  onResize(): void {
    undefined;
  }
}

export { Resizer };
