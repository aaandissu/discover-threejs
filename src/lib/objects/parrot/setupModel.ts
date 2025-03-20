import { AnimationMixer } from "three";

function setupModel(data: any) {
  const model = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.startAt(-1).fadeIn(0.5).setEffectiveTimeScale(10).halt(10).play();

  model.tick = (delta: number) => mixer.update(delta);

  return model;
}

export { setupModel };
