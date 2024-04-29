import preloader from "../../../assets/images/preloader.gif";
import React from "react";

type PreloaderPropsType ={

}
export const Preloader = (props: PreloaderPropsType)=>{
    return <div>
        <img src={preloader}/>
    </div>
}