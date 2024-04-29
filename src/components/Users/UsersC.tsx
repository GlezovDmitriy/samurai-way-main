import React from "react";
import {UsersPropsType} from "../../redux/users-reducer";
import {inspect} from "util";
import s from './users.module.css';
import {MyUsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import {UsersFunc} from "./UsersFunc";

export class UsersAPI extends React.Component<MyUsersType> {

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


        return <UsersFunc onPageChanged={this.onPageChanged}
                          pageSize={this.props.pageSize}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                          users={this.props.users}
                          currentPage={this.props.currentPage}
                          totalUsersCount={this.props.totalUsersCount}/>

    }


}