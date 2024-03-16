import {connect} from "react-redux";
import {Users} from "./Users";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPropsType, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

let mapStateToProps = (state:AppStateType)=>{
    return{
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch)=>{
    return{
        follow: (userId: number) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) =>{
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)