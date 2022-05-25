import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../../redux/users-reducer";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

  // constructor() {
  //   super();
  //
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
  //     this.props.setUsers(response.data.items)
  //   })
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalCount(response.data.totalCount)
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <Users
    totalCount={this.props.totalCount}
    pageSize={this.props.pageSize}
    currentPage ={this.props.currentPage}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    onPageChanged={this.onPageChanged}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)