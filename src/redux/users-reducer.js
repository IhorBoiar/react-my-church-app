const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'

let initialState = {
  users: [
  //   {id: 1, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: false, fullName: 'Ihor B', status: 'I am boss', location: {city: 'Rivne', country: 'Ukraine'}},
  //   {id: 2, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: true, fullName: 'Vasya S', status: 'I am boss yes', location: {city: 'Kiev', country: 'Ukraine'}},
  //   {id: 3, photo: 'https://avatars.githubusercontent.com/u/490943?v=4', followed: false, fullName: 'Petya A', status: 'I am boss too', location: {city: 'Zhyto', country: 'Ukraine'}}
  ],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    default:
      return state
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_COUNT:
      return {
        ...state, totalCount: action.totalCount
      }
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount
  }
}

export default usersReducer