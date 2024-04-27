import React from "react";
import {UsersPropsType} from "../../redux/users-reducer";
import {inspect} from "util";
import s from './users.module.css';
import {MyUsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export class Users extends React.Component<MyUsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    getUsers = () => {
    }
    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.usersPage}>
            <div className={s.pageNumbersBtn}>
                {pages.map(p=>{
                   return <span className={this.props.currentPage === p ? s.selectedPage: s.page}
                   onClick={()=>{this.onPageChanged(p)}}>
                        {p}</span>
                })}
            </div>
            <button onClick={this.getUsers}> Get Users</button>
            {   // props.users приходит из UsersContainer
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                          className={s.userPhoto}/></div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
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


}