import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts/>

        </div>
    );
};

