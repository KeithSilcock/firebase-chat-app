import types from "../actions/types";

const DEFAULT_STATE = {
  message: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_INPUT:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case types.CLEAR_INPUT:
      return { ...state, [action.payload]: "" };
    case types.CLEAR_MANY_INPUTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
