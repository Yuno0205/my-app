import React from "react";
import './style.css'
const Profile = (props) =>{
    console.log(props)
    return(
        <>
        <h1 className="header">Tên:  {props && props.name}</h1>
        <h1 >MSSV: {props && props.mssv}</h1>
        </>
    )
}
export default Profile;