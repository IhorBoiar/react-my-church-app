import styles from "./Propositions.module.css"
import Proposition from "./Proposition/Proposition"
import React from "react"

const Propositions = (props) => {

  let  propositionsElements = props.propositionElements.map(proposition => <Proposition key={proposition.id} body={proposition.body} likes={proposition.likes}/>)

  let newText = React.createRef()

  let onAddProposition = () => {
    props.addProposition()
  }

  let onPropositionChange = () => {
    let text = newText.current.value
    props.updateAddPropositionText(text)
  }

  return (
    <>
      <h1>Propositions</h1>
      <div className={styles.container}>
        <div className={styles.block}>
          {propositionsElements}
        </div>
      </div>
      <textarea onChange={onPropositionChange} ref={newText} className={styles.form} value={props.newPropositionText}></textarea>
      <button className={styles.submitForm} onClick={onAddProposition}>Add proposition</button>
    </>
  )
}

export default Propositions