import React from "react";
import s from './Header.module.css';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";
import {Header}  from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserDataAC} from "../../redux/auth-reducer";
import {ProfileType} from "../Profile/Profile";


type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
}
type MapDispatchPropsType = {
    setUserDataAC: (id:number, email: string, login: string )=>void
}
type PathParamsType = {
    userId: string
}
type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType
 class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true})
            .then(response => {
if (response.data.resultCode === 0){
    let {id, login, email} = response.data.data
    this.props.setUserDataAC(id, email, login )
}

            })
    }

     render (){
        return<Header /*{...this.props}*//>
    }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType=>({})
let WithRouterDataContainerComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {setUserDataAC})(WithRouterDataContainerComponent)