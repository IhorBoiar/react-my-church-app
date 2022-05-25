import {combineReducers, createStore} from "redux";
import messagesReducer from "./messages-reducer";
import propositionsReducer from "./propositions-reducer";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  messagesPage: messagesReducer,
  propositionsPage: propositionsReducer,
  header: headerReducer,
  usersPage: usersReducer
})

let store = createStore(reducers)

export default store