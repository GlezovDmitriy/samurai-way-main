import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

export class UsersContainer extends React.Component<MyUsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    //getUsers = () => {    // для кнопки get users
    //}
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        return <Users onPageChanged={this.onPageChanged}
                      pageSize={this.props.pageSize}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      users={this.props.users}
                      currentPage={this.props.currentPage}
                      totalUsersCount={this.props.totalUsersCount}/>

    }


}

type mapStateToPropsType = {
    users:  UserType[]
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow:(userId: number) => void
    setUsers:(users: UserType[])=>void
    setCurrentPage:(currentPage:number) =>void
    setTotalUsersCount:(totalCount:number)=>void
}
export type MyUsersType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state:AppStateType): mapStateToPropsType=>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType=>{
    return{
        follow: (userId: number) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)