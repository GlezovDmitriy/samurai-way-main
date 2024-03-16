import React from "react";
import {UsersPropsType} from "../../redux/users-reducer";
import {inspect} from "util";
import s from './users.module.css';
import {MyUsersType} from "./UsersContainer";

export const Users = (props: MyUsersType) => {
    if (props.users.length === 0){
        props.setUsers([
                {id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: false, fullName: "Dmitriy", status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: false, fullName: "Sasha", status: 'Boss too', location: {city: 'Moskow', country: 'Russia'}},
                {id: 3, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: true, fullName: "Andrew", status: 'Boss too', location: {city: 'Kiev', country: 'Ukraine'}},
            ]
        )
    }
    return <div>
        {   // props.users приходит из UsersContainer
            props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photoUrl} className={s.userPhoto}/></div>
                <div>
                    {u.followed
                        ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}


                </div>
            </span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div>
                 <div>{u.location.city}</div>
            </span>
            </div>
            )
        }
    </div>
}