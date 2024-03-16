import React from "react";
import {UsersPropsType} from "../../redux/users-reducer";

export const Users = (props: UsersPropsType) => {
    return <div>
        {   // props.users приходит из UsersContainer
            props.users.map(u => <div key={u.id}>
            <span>
                <div><img src={u.photoUrl}/></div>
                <div><button>Follow</button></div>
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