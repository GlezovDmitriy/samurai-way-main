import {connect} from "react-redux";
import { UsersAPI} from "./UsersC";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPropsType,
    UserType
} from "../../redux/users-reducer";
import {Dispatch} from "redux";

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPI)