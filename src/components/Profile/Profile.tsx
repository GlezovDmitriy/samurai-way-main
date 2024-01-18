import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {PostsDataType, PostType} from "../../redux/state";

type ProfileType = {
    postsData: PostsDataType,
    addPost: (postMessage: string) => void,
    newPostText: string
}
export const Profile = (props: ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     addPost={props.addPost}/>

        </div>
    );
};

