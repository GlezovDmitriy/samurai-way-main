import React from 'react';
import s from "../Profile.module.css";
import {ProfileType} from "../Profile";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoType={
photo: string
}
export const ProfileInfo = (props:ProfileInfoType) => {

    return (
            <div className={s.photo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp8tDz-CLcq9UFcTjadrhIpzYBHY_viZC4w&usqp=CAU"
                    alt="photo"/>
                <div className={s.descriptionBlock}>
                    <img src={props.photo}/>
avatarka
                </div>
            </div>
    );
};

