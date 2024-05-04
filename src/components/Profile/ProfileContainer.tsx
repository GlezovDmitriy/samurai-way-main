import React from 'react';
import s from './Profile.module.css';
import {AppStateType, StoreReduxType} from "../../redux/redux-store";
import {Profile, ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC, SetUserProfileActionType} from "../../redux/profile-reducer";
import {Route, RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfileAC:(profile: ProfileType)=>void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType
 class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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
let mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    profile: state.profilePage.profile

})
let WithRouterDataContainerComponent = withRouter(ProfileContainer)
export  default connect(mapStateToProps, {setUserProfileAC})(WithRouterDataContainerComponent)