import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionsTypes, PostsDataType, store} from "../../redux/state";

type ProfileType = {
    postsData: PostsDataType,
    newPostText: string,
    dispatch:(action:ActionsTypes)=>void,
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>

        </div>
    );
};

