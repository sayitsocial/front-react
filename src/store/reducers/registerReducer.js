import {
  MOD_REGISTER_STAGE,
  INC_REGISTER_STAGE,
  DEC_REGISTER_STAGE,
  ADD_REGISTER_DATA,
  MOD_IDENTITY,
} from "../constants";

const initialState = {
  identity: 0,
  registerStage: 0,
  registerData: {},
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case MOD_REGISTER_STAGE:
      return Object.assign({}, state, {
        registerStage: action.value,
      });

    case INC_REGISTER_STAGE:
      return Object.assign({}, state, {
        registerStage: state.registerStage + 1,
      });

    case DEC_REGISTER_STAGE:
      return Object.assign({}, state, {
        registerStage: state.registerStage - 1,
      });

    case ADD_REGISTER_DATA:
      return Object.assign({}, state, {
        registerData: {
          ...state.registerData,
          [action.key]: action.value,
        },
      });

    case MOD_IDENTITY:
      return Object.assign({}, state, {
        identity: action.value,
      });

    default:
      return state;
  }
}

export default registerReducer;
