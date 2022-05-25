import styles from './Header.module.css'
import logo from '../../logo-church.png'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/"><img src={logo} alt='logo' /></Link>
        <Link to="/">Home</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/propositions">Propositions</Link>
        <Link to="/users">Users</Link>
      </div>
    </>
  )
}

export default Header