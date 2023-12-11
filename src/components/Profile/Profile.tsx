import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {message} from "antd";
import {PostsDataType, PostType} from "../../index";

type ProfileType = {
    postsData: PostsDataType
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts postsData = {props.postsData}/>

        </div>
    );
};

