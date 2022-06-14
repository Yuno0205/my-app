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
    const notify4 = () => toast.error("Sorry this email already exists in the system !");

    const warning = () => toast.warn("Please fill out all fields!")
    const warning2 = () => toast.warn("You have entered an invalid email address!!")
    const warning3 = () => toast.warn("Password minimum 8 characters!")
    
    
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
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    //Res
    const handleResgister = async (e) => {
        e.preventDefault()

        if (email !== "" && password !== "" && username !== "") {
            email = email.toLowerCase();
            password = password.toLowerCase();
            username = username.toLowerCase();
            if( validateEmail(email) == null) {
                warning2()
             
                 return ;
             }else if(password.length < 8){
                 
                warning3()
                return;
             }

            const response = await postAPI(API_SEVER_USERS + "/resgister", { email, username, password })

            if (response) {
                notify3()
                navigate('/login')
            }else{
                notify4()
                return
            }
        } else {
           warning()
        }




    }



    //Get List Users
    const getListUsers = async () => {

        const response = await getAPI2(API_SEVER_USERS + `/listusers`)
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