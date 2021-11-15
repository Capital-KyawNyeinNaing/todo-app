import axios from 'axios'
import * as types from '../types'
import { FetchRequest, FetchSuccess, FetchError } from './typehandle'

const getNote = () => async dispatch => {
  dispatch(FetchRequest(types.GETNOTE_REQUEST))
  return await axios.get('http://localhost:5000/notes')
    .then(res => {
      if (res.data.error) {
        console.log(res.data)
      } else {
        dispatch(FetchSuccess(types.GETNOTE_SUCCESS, res.data))
      }
    })
    .catch(error => dispatch(FetchError(types.GETNOTE_ERROR, error.message)))
}

export const noteAction = {
  getNote
}