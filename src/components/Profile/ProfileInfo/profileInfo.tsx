import React from 'react';
import s from "../Profile.module.css";

type ProfileInfoType={

}
export const ProfileInfo = (props:ProfileInfoType) => {
    return (
            <div className={s.photo}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMp8tDz-CLcq9UFcTjadrhIpzYBHY_viZC4w&usqp=CAU"
                    alt="photo"/>
                <div className={s.descriptionBlock}>
avatarka
                </div>
            </div>
    );
};

