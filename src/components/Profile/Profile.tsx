import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {Avatar} from "./Avatar/Avatar";
import {ProfileInfo} from "./ProfileInfo/profileInfo";
import {ActionsTypes} from "../../redux/store";
import {PostsDataType} from "../../redux/types";
import {StoreReduxType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store:StoreReduxType
}
export const Profile = (props: ProfileType) => {
    let state = props.store.getState();
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Avatar/>
            <MyPostsContainer/>

        </div>
    );
};

