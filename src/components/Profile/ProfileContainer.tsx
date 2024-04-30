import React from 'react';
import s from './Profile.module.css';
import {AppStateType, StoreReduxType} from "../../redux/redux-store";
import {Profile, ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profile-reducer";

type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfileAC:(profile: ProfileType)=>void
}
 class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
    }

    render() {
        return (
            <div className={s.content}>
                <Profile {...this.props.profile}/>
            </div>
        );
    }


};
let mapStateToProps = (state:AppStateType) => ({
    profile: state.profilePage.profile

})
export  default connect(mapStateToProps, {setUserProfileAC})(ProfileContainer)