const initialState = {
  isModal: false
}

const emitReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_MODAL':
      return {
        ...state,
        isModal: action.payload
      }

    default:
      return state
    }
}

export default emitReducer
