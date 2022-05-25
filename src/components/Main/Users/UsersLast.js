import styles from './Users.module.css'
import * as axios from "axios"
import avatarStandart from '../../../blank-profile.png'

let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      })

      // props.setUsers([
      //   {id: 1, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: false, fullName: 'Ihor B', status: 'I am boss', location: {city: 'Rivne', country: 'Ukraine'}},
      //   {id: 2, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: true, fullName: 'Vasya S', status: 'I am boss yes', location: {city: 'Kiev', country: 'Ukraine'}},
      //   {id: 3, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: false, fullName: 'Petya A', status: 'I am boss too', location: {city: 'Zhyto', country: 'Ukraine'}}
      // ])
    }
  }
  
  return (
    <>
      <h1>Users</h1>
      <button onClick={getUsers}>Get Users</button>
      <div className={styles.container}>
        {
          props.users.map( u =>
            <>
              <div key={u.id} className={styles.userBlock}>
                <div>
                  <div><img src={ u.photos.small ? u.photos.small : avatarStandart } alt={ u.name }/></div>
                  { u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(u.id)}>Follow</button> }
                </div>
                <div>
                  <div>{ u.name }</div>
                  <div>{ "u.status" }</div>
                  <div>{ "u.city" }</div>
                  <div>{ "u.country" }</div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  )
}

export default Users