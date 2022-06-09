import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'
import { getAPI2, postAPI } from "../utils/api";
import { API_LOGIN } from '../utils/const'
import { UserLoginSuccess } from "../store/actions/index";
import { deleteAPI, getAPI, putAPI } from '../utils/api'
import { API_SEVER_USERS } from '../utils/const'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
    const notify = () => toast.success("Login Successful !");
    const notify2 = () => toast.error("Login failed ! Please double check your account information !");
    const notify3 = () => toast.success("Successful account registration!");
    
    
    //State


    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [username, setUserName] = useState("")
    const [listusers, setListUsers] = useState([])

    const navigate = useNavigate()



    //Function
    const handleLogin = async (e) => {
        e.preventDefault()
        if (email !== "" && password !== "") {
            email = email.toLowerCase();
            password = password.toLowerCase();
            const response = await postAPI(API_LOGIN, { email, password })

            console.log("Usename : ", email)
            console.log("Passwword : ", password)
            console.log("Response : ", response)
            if (response) {

                UserLoginSuccess(response.data)
                notify()
                const check = JSON.parse(localStorage.getItem('User'))
                const checkAdmin = check.role

                if (checkAdmin === "admin") {
                    navigate('/dashboard')
                } else {
                    navigate('/')
                }






            } else {
                notify2()

            }
        }




    }

    //Res
    const handleResgister = async (e) => {
        e.preventDefault()

        if (email !== "" && password !== "" && username !== "") {
            email = email.toLowerCase();
            password = password.toLowerCase();
            username = username.toLowerCase();
            const response = await postAPI(API_SEVER_USERS + "/resgister", { email, username, password })

            console.log("Email : ", email)
            console.log("Username:", username)
            console.log("Passwword : ", password)
            console.log("Response : ", response)
            if (response) {
                notify3()
                navigate('/login')
            }
        } else {
            alert("Vui lòng điền đủ vào các ô!")
        }




    }



    //Get List Users
    const getListUsers = async () => {

        const response = await getAPI2(API_SEVER_USERS + `/listusers`)
        console.log("List users :", response)
        // check dữ dữ liệu trước khi lấy
        if (response) {
            setListUsers(response)
        } else {
            alert('Error')
        }


    }

  
   

    const loginContextData = {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUserName,
        navigate,
        handleLogin,
        handleResgister,
        listusers,
        setListUsers,
        getListUsers,
       
    }


    //Return provider
    return (
        <LoginContext.Provider value={loginContextData}>
            {children}
        </LoginContext.Provider>
    )

}



export default LoginContextProvider