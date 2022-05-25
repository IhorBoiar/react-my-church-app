import {addMessageActionCreator, updateAddMessageTextActionCreator} from "../../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

// const MessagesContainer = (props) => {
//
//   let state = props.store.getState().messagesPage
//
//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator())
//   }
//
//   let updateAddMessageText = (body) => {
//     props.store.dispatch(updateAddMessageTextActionCreator(body))
//   }
//
//   return (
//     <>
//      <Messages addMessage={addMessage} updateAddMessageText={updateAddMessageText} messagesPage={state}/>
//     </>
//   )
// }

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {dispatch(addMessageActionCreator())},
    updateAddMessageText: (body) => {dispatch(updateAddMessageTextActionCreator(body))}
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer