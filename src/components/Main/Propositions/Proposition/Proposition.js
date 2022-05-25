import styles from "./Proposition.module.css";

const Proposition = (props) => {
  return (
    <>
      <li className={styles.li}>
        <p>{props.body}</p>
        <span className={styles.span}>likes: {props.likes}</span>
      </li>
    </>
  )
}

export default Proposition