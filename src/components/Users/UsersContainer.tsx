import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users:  UserType[]
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow:(userId: number) => void
    setUsers:(users: UserType[])=>void
}
export type MyUsersType = mapStateToPropsType & mapDispatchToPropsType
let mapStateToProps = (state:AppStateType): mapStateToPropsType=>{
    return{
        users: state.usersPage.users
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)