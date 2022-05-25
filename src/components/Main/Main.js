import {Route, Routes} from "react-router-dom";
import PropositionsContainer from "./Propositions/PropositionsContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import Home from "./Home/Home";
import UsersContainer from "./Users/UsersContainer";

const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/messages" element={<MessagesContainer />} />
          <Route path="/propositions" element={<PropositionsContainer />} />
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </main>
    </>
  )
}

export default Main