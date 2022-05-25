import {addPropositionActionCreator, updateAddPropositionTextActionCreator} from "../../../redux/propositions-reducer";
import Propositions from "./Propositions";
import {connect} from "react-redux";

// const PropositionsContainer = (props) => {
//
//   let state = props.store.getState()
//
//   let addProposition = () => {
//     props.store.dispatch(addPropositionActionCreator())
//   }
//
//   let onPropositionChange = (text) => {
//     let action = updateAddPropositionTextActionCreator(text)
//     props.store.dispatch(action)
//   }
//
//   return (
//     <>
//       <Propositions updateAddPropositionText={onPropositionChange}
//                     addProposition={addProposition}
//                     propositionElements={state.propositionsPage.propositions}
//                     newPropositionText={state.propositionsPage.newPropositionText}
//       />
//     </>
//   )
// }

let mapStateToProps = (state) => {
  return {
    propositionElements: state.propositionsPage.propositions,
    newPropositionText: state.propositionsPage.newPropositionText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addProposition: () => {
      dispatch(addPropositionActionCreator())
    },
    updateAddPropositionText: (text) => {
      dispatch(updateAddPropositionTextActionCreator(text))
    }
  }
}

const PropositionsContainer = connect(mapStateToProps, mapDispatchToProps)(Propositions)

export default PropositionsContainer