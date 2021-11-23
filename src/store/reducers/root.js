import { combineReducers } from "redux";
import noteReducer from "./note.reducer";
import emitReducer from "./emit.reducer";

export default combineReducers({
  noteReducer,
  emitReducer
});
