import {
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  Group,
  MathUtils,
} from "three";

class CustomGroup extends Group {
  tick?: (delta: number) => void;
}

function createMeshGroup() {
  const group = new CustomGroup();

  const geometry = new SphereGeometry(0.5, 16, 16);

  const material = new MeshStandardMaterial({
    color: "gray",
  });

  const protoSphere = new Mesh(geometry, material);

  group.add(protoSphere);

  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();
    sphere.position.x = Math.cos(2 * Math.PI * i);
    sphere.position.y = Math.sin(2 * Math.PI * i);
    sphere.scale.multiplyScalar(0.1 + i);
    group.add(sphere);
  }

  const radiansPerSecond = MathUtils.degToRad(30);

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}

export { createMeshGroup };
