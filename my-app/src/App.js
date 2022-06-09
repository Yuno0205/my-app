import React, { useState, useEffect, props } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import './style.css'
import Profile from "./composnent/profile";
import { Profiler } from 'react/cjs/react.production.min';
import axios from 'axios';
import ListPost from './composnent/Post/ListPost';

import Grid from '@mui/material/Grid';




import Home from './composnent/pages/Home';
import Contacts from './composnent/pages/Contacts';
import ProductUI from './composnent/pages/ProductUI';
import ListProduct from './composnent/pages/ListProduct';
import Login from './composnent/Account/Login'
import MyDashboard from './composnent/pages/MyDashboard';
import TestPage from './composnent/pages/TestPage';
import ProductDash from './composnent/pages/ProductDash';
import GlobalProvider from "./context/globalProvider"
import CategoryDash from './composnent/pages/CategoryDash';
import { initialState } from "./store/initialState"
import { cartReducer } from "./store/reducers"
import Cart from './composnent/Cart/cart';
import LoginContextProvider from './context/LoginContext';
import ProductContextProvider from './context/ProductContext';
import CheckOut from './composnent/Cart/CheckOut';
import OrdersContextProvider from './context/OrdersContext';
import NotifyContextProvider from './context/NotifyContext';
import Success from './composnent/Cart/Success';
import OrdersDash from './composnent/pages/OrdersDash';
import OrdersDetails from './composnent/pages/OrdersDetails';
import DetailsProduct from './composnent/pages/DetailsProduct';
import NotFound from './composnent/pages/NotFound';
import Resgister from './composnent/Account/Resgister';



function App() {

    // const [user, setUser] = useState(localStorage['User'] ? JSON.parse(localStorage['User']) : { username: 'Đăng nhập', role: 'user', img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' })


    // const [isAdmin, setIsAdmin] = useState(undefined)


    // if (localStorage['User']) {

    //     const role = JSON.parse(localStorage.getItem("User")).role



    //     if (role === "admin") {
    //         setIsAdmin("Admin")
    //     }



    // }else{
    //     localStorage.setItem('User', JSON.stringify({username: 'Normal user' ,role : "user", img : ""}));

    // }

    // useEffect(() => {

    //     setUser(JSON.parse(localStorage["User"]) )


    // }, [])
    return (



        <div>

            <GlobalProvider reducer={cartReducer} initialState={initialState} >
                <LoginContextProvider>
                    <ProductContextProvider>
                        <OrdersContextProvider>
                            <NotifyContextProvider>
                                <Routes>


                                    <Route path='/' element={<Home />} />
                                    <Route path='/contact' element={<Contacts />} />
                                    <Route path='/ui' element={<ProductUI />} />
                                    <Route path='/product' element={<ListProduct />} />
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/resgister' element={<Resgister />} />
                                    {/* {isAdmin ? <Route path='/dashboard' element={<MyDashboard/>} /> : <Route path='/dashboard' element={<NotFound></NotFound>} />} */}
                                    <Route path='/dashboard/testpage' element={<TestPage />} />
                                    <Route path='/dashboard/product' element={<ProductDash ></ProductDash>} />
                                    <Route path='/dashboard/category' element={<CategoryDash ></CategoryDash>} />
                                    <Route path='/dashboard/orders' element={<OrdersDash></OrdersDash>} />
                                    <Route path='/dashboard' element={<MyDashboard />} />
                                    <Route path='/cart' element={<Cart></Cart>} />
                                    <Route path='/checkout' element={<CheckOut></CheckOut>} />
                                    <Route path='/success' element={<Success></Success>} />
                                    <Route path='/ordersdetail/:id' element={<OrdersDetails></OrdersDetails>} />
                                    <Route path='/product/:id' element={<DetailsProduct></DetailsProduct>} />



                                </Routes>
                            </NotifyContextProvider>
                        </OrdersContextProvider>
                    </ProductContextProvider>
                </LoginContextProvider>

            </GlobalProvider>

        </div>


    );
}

export default App;
