import styles from './Messages.module.css'
import MessageItem from "./MessageItem/MessageItem";
import React from "react";

const Messages = (props) => {

  let messagesElements = props.messagesPage.messages.map(message => <MessageItem key={message.id} name={message.name} message={message.body}/>)

  let textElement = React.createRef()

  let onAddMessage = () => {
    props.addMessage()
  }

  let onUpdateAddMessageText = (e) => {
    let body = e.target.value
    props.updateAddMessageText(body)
  }

  return (
    <>
      <h1>Messages</h1>
      <div className={styles.container}>
        {messagesElements}
      </div>
      <textarea onChange={onUpdateAddMessageText} ref={textElement} className={styles.form} value={props.messagesPage.newMessageText}></textarea>
      <button className={styles.submitForm} onClick={onAddMessage}>Add message</button>
    </>
  )
}

export default Messages