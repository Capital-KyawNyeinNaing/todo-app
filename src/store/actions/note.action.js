import axios from "axios";
import * as types from "../types";
import { FetchRequest, FetchSuccess, FetchError } from "./typehandle";

const getNote = () => async (dispatch) => {
  dispatch(FetchRequest(types.GETNOTE_REQUEST));
  return await axios.get("http://localhost:5000/notes")
    .then((res) => {
      if (res.data.error) {
        console.log(res.data);
      } else {
        dispatch(FetchSuccess(types.GETNOTE_SUCCESS, res.data));
      }
    })
    .catch((error) => dispatch(FetchError(types.GETNOTE_ERROR, error.message)));
};

const createNote = ({ body, updated }) => async (dispatch) => {
  dispatch(FetchRequest(types.CREATENOTE_REQUEST));
  return await axios.post("http://localhost:5000/notes", {body, updated}, {
    headers: {"Content-Type": "application/json"}
  })
    .then((res) => {
      if (res.data.error) {
        console.log(res.data);
      } else {
        dispatch(FetchSuccess(types.CREATENOTE_SUCCESS, res.data));
      }
    })
    .catch((error) =>
      dispatch(FetchError(types.CREATENOTE_ERROR, error.message))
    );
};

const updateNote = ({ id, body, updated }) => async (dispatch) => {
  dispatch(FetchRequest(types.UPDATENOTE_REQUEST));
  return await axios.put(`http://localhost:5000/notes/${id}`, { body, updated}, {
    headers: {"Content-Type": "application/json"},
  })
    .then((res) => {
      if (res.data.error) {
        console.log(res.data);
      } else {
        dispatch(FetchSuccess(types.UPDATENOTE_SUCCESS, res.data));
      }
    })
    .catch((error) =>
      dispatch(FetchError(types.UPDATENOTE_ERROR, error.message))
    ); 
};

const deleteNote = ({ id }) => async (dispatch) => {
  dispatch(FetchRequest(types.DELETENOTE_REQUEST));
  return await axios.delete(`http://localhost:5000/notes/${id}`)
    .catch((error) =>
      dispatch(FetchError(types.DELETENOTE_ERROR, error.message))
    ); 
};

export const noteAction = {
  getNote,
  createNote,
  updateNote,
  deleteNote
};
