import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Header}  from './Header';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = {

}
 class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then(response => {


            })
    }

     render (){
        return<Header {...this.props}/>
    }
}
const mapStateToProps = (state: AppStateType)=>({})
export default connect()(HeaderContainer)