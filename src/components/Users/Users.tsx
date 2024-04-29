import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UserType} from "../../redux/users-reducer";
 type UsersFuncPropsType = {
     users: UserType[]
     totalUsersCount:number
     pageSize:number
     currentPage:number
     onPageChanged:(pageNumber:number)=>void
     follow: (userId: number) => void
     unfollow:(userId: number) => void
 }
export const Users = (props:UsersFuncPropsType)=>{
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={s.usersPage}>
        <div className={s.pageNumbersBtn}>
            {pages.map(p=>{
                return <span className={props.currentPage === p ? s.selectedPage: s.page}
                             onClick={()=>{props.onPageChanged(p)}}>
                        {p}</span>
            })}
        </div>
        {/*<button onClick={this.getUsers}> Get Users</button>*/}
        {   // props.users приходит из UsersContainer
            props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                          className={s.userPhoto}/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}


                </div>
            </span>
                    <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
                    <span>
                <div>{'u.location.country'}</div>
                 <div>{"u.location.city"}</div>
            </span>
                </div>
            )
        }
    </div>

}
