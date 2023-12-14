import React from 'react';
import state from "../../redux/state";
import {FriendsType} from "../../redux/state";
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
        </div>
    );
};

