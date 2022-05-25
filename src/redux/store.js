import messagesReducer from "./messages-reducer";
import propositionsReducer from "./propositions-reducer";
import headerReducer from "./header-reducer";

let store = {
  _state: {
    propositionsPage: {
      propositions: [
        {id: 1, body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', likes: 21},
        {id: 2, body: 'Text Text Text Text Text Text Text Text ', likes: 11},
        {id: 3, body: 'Today is good day, really!', likes: 12},
      ],
      newPropositionText: 'text'
    },
    messagesPage: {
      messages: [
        {id: 1, name: 'Ihor', body: 'Text!'},
        {id: 2, name: 'Roma', body: 'yuhhuu!'},
        {id: 3, name: 'Vasya', body: 'My!'},
        {id: 4, name: 'Petya', body: 'God is good!'},
        {id: 5, name: 'Lenka', body: 'hhhh!'},
        {id: 6, name: 'Tanya', body: 'hhhhssda!'}
      ],
      newMessageText: 'message'
    },
    header: {}
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.propositionsPage = propositionsReducer(this._state.propositionsPage, action)
    this._state.header = headerReducer(this._state.header, action)

    this._callSubscriber()
  }
}

export default store