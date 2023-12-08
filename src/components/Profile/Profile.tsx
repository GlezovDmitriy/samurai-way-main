import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {message} from "antd";

type ProfileType = {
    message: string,
    id:number,
    likesCount:number
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts message={props.message} id={props.id} likesCount={props.likesCount} />

        </div>
    );
};

