import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

function createLights() {
  // Create a directional light
  // const ambientLight = new AmbientLight("white", 0.5);
  const ambientLight = new HemisphereLight("white", "darkgray", 0.5);

  const mainLight = new DirectionalLight("white", 5);

  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
