const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_ADD_MESSAGE_TEXT = 'UPDATE-ADD-MESSAGE-TEXT'

let initialState = {
  messages: [
    {id: 1, name: 'Ihor', body: 'Text!'},
    {id: 2, name: 'Roma', body: 'yuhhuu!'},
    {id: 3, name: 'Vasya', body: 'My!'},
    {id: 4, name: 'Petya', body: 'God is good!'},
    {id: 5, name: 'Lenka', body: 'hhhh!'},
    {id: 6, name: 'Tanya', body: 'hhhhssda!'}
  ],
  newMessageText: 'message'
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      // let newMessage = {id: 7, name: 'User', body: state.newMessageText}
      // let stateCopy = {...state}
      // stateCopy.messages = [...state.messages]
      // stateCopy.messages.push(newMessage)
      // stateCopy.newMessageText = ''
      return {
        ...state,
        messages: [...state.messages, {id: 7, name: 'User', body: state.newMessageText}],
        newMessageText: ''
      }

    case UPDATE_ADD_MESSAGE_TEXT:
      // let stateCopy = {...state}
      // stateCopy.newMessageText = action.body
      return {
        ...state,
        newMessageText: action.body
      }

    default:
      return state
  }
}

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const updateAddMessageTextActionCreator = (body) => {
  return {
    type: UPDATE_ADD_MESSAGE_TEXT,
    body: body
  }
}

export default messagesReducer