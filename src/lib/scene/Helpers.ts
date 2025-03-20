import { AxesHelper, GridHelper } from "three";

function createGridHelper() {
  const helper = new AxesHelper(3);
  helper.position.set(-3, 0, -3);
  return helper;
}

function createAxesHelper() {
  const helper = new GridHelper(6);
  return helper;
}

export { createGridHelper, createAxesHelper };
