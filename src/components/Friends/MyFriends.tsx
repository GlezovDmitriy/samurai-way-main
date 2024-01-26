import React from 'react';
import state from "../../redux/store";
import {FriendsType} from "../../redux/types";
import s from "../Profile/Profile.module.css";

type MyFriendsType = {
    friends: FriendsType,
}
export const MyFriends = (props: MyFriendsType) => {
    return (
        <div className={s.content}>
            <img style={{width: "300px", height: "180px"}}
                 src="https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="photo"/>
            <h3> Friends </h3>
            <ul>
                {props.friends.map((f)=>
                        { return(
                <li> {f.name}</li>
                )})}

            </ul>
        </div>
    );
};

