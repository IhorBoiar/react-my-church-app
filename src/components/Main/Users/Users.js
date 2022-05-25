import styles from './Users.module.css'
import avatarStandart from '../../../blank-profile.png'
import React from "react";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <h1>Users</h1>
      <div className={styles.pagination}>
        {pages.map(p => (
          <span className={(props.currentPage === p) && styles.currentPage} onClick={() => {
            props.onPageChanged(p)
          }}>{p}</span>
        ))}
      </div>
      <div className={styles.container}>
        {
          props.users.map(u =>
            <div key={u.id} className={styles.userBlock}>
              <div>
                <div><img src={u.photos.small ? u.photos.small : avatarStandart} alt={u.name}/></div>
                {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>Follow</button>}
              </div>
              <div>
                <div>{u.name}</div>
                <div>{"u.status"}</div>
                <div>{"u.city"}</div>
                <div>{"u.country"}</div>
              </div>
            </div>
          )}
      </div>
    </>
  )
}

export default Users