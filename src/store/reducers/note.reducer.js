import * as types from "../types";

const initialState = {
  error: null,
  isLoading: false,
  note_data: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETNOTE_REQUEST: // typeName
      return {
        ...state,
        isLoading: true,
      };
    case types.GETNOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        note_data: action.data,
      };
    case types.GETNOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default todoReducer;
