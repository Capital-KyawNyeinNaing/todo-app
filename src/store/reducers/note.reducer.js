import * as types from "../types";

const initialState = {
  error: null,
  isLoading: false,
  note_data: null,
  createNote_data: null
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETNOTE_REQUEST: // get note
      return {
        ...state,
        isLoading: true,
      };
    case types.GETNOTE_SUCCESS:
      return {
        ...state,
        note_data: action.data,
        isLoading: false,
      };
    case types.GETNOTE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case types.CREATENOTE_REQUEST: // create note
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATENOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createNote_data: action.data,
      };
    case types.CREATENOTE_ERROR:
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
