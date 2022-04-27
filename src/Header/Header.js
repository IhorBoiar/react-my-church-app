import styles from './Header.module.css'
import logo from '../logo-church.png'

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.menuLink}><img src={logo} alt='logo' /></div>
        <div className={styles.menuLink}>Home</div>
        <div className={styles.menuLink}>Posts</div>
        <div className={styles.menuLink}>Propositions</div>
      </div>
    </>
  )
}

export default Header