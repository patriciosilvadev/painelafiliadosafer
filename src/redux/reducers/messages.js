const initialState = {
  success: false,
  error: false
}

const MessagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SUCCESS":
      return {...state, success: action.payload.success};
    case "ERROR":
      return {...state, error: action.payload.error};
    default: 
    return state;
  }
}

export default MessagesReducer;