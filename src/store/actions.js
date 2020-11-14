import {
  MOD_REGISTER_STAGE,
  INC_REGISTER_STAGE,
  DEC_REGISTER_STAGE,
  ADD_REGISTER_DATA,
  MOD_IDENTITY,
} from "./constants";

export function modRegisterStage(value) {
  return { type: MOD_REGISTER_STAGE, value };
}

export function incRegisterStage() {
  return { type: INC_REGISTER_STAGE };
}

export function decRegisterStage() {
  return { type: DEC_REGISTER_STAGE };
}

export function addRegisterData(key, value) {
  return { type: ADD_REGISTER_DATA, key, value };
}

export function modIdentity(value) {
  return { type: MOD_IDENTITY, value };
}
