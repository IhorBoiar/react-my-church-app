const ADD_PROPOSITION = 'ADD-PROPOSITION'
const UPDATE_ADD_PROPOSITION_TEXT = 'UPDATE-ADD-PROPOSITION-TEXT'

let initialState = {
  propositions: [
    {id: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', likes: 21},
    {id: 2, body: 'Text Text Text Text Text Text Text Text ', likes: 11},
    {id: 3, body: 'Today is good day, really!', likes: 12},
  ],
  newPropositionText: 'text'
}

const propositionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PROPOSITION:
      // let newItem = {id: 4, body: state.newPropositionText, likes: 0}
      // let stateCopy = {...state}
      // stateCopy.propositions = [...state.propositions]
      // stateCopy.propositions.push(newItem)
      // stateCopy.newPropositionText = ''
      return {
        ...state,
        propositions: [...state.propositions, {id: 4, body: state.newPropositionText, likes: 0}],
        newPropositionText: ''
      }
    case UPDATE_ADD_PROPOSITION_TEXT: {
      // let stateCopy = {...state}
      // stateCopy.newPropositionText = action.text
      return {
        ...state,
        newPropositionText: action.text
      }
    }
    default:
      return state
  }
}

export const addPropositionActionCreator = () => {
  return {
    type: ADD_PROPOSITION
  }
}

export const updateAddPropositionTextActionCreator = (text) => {
  return {
    type: UPDATE_ADD_PROPOSITION_TEXT,
    text: text
  }
}

export default propositionsReducer