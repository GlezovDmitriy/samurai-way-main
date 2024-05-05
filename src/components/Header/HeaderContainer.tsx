import React from "react";
import s from './Header.module.css';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {Header} from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserDataAC} from "../../redux/auth-reducer";
import {ProfileType} from "../Profile/Profile";


type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean;
    login: string | null;
}
type MapDispatchPropsType = {
    setUserDataAC: (id: number, email: string, login: string, isAuth: boolean) => void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {uid, login, email, isAuth} = response.data.data
                    this.props.setUserDataAC(uid, email, login, isAuth)
                }

            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
let WithRouterDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {setUserDataAC})(WithRouterDataContainerComponent)