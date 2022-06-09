import React, { createContext, useState } from "react";
import { getAPI, postAPI, putAPI } from "../utils/api";
import { API_SEVER_ORDER } from '../utils/const'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const OrdersContext = createContext()

const OrdersContextProvider = ({ children }) => {
  const notify = () => toast.warn("Successfully updated order status !");
  //State


  let [orders, setOrders] = useState("")
  const [listorders, setListOrders] = useState([])
  const [listordersdetails, setListOrdersDetails] = useState([])

  const [postOrders, setPostOrders] = useState({
    name: '',
    customer: '',
    status: '',
    total: '',
    shipping_address: '',
    phone: '',
    email: '',
    items: []
  })


  //Get list
  const getListOrders = async () => {

    const response = await getAPI(API_SEVER_ORDER)

    // check dữ dữ liệu trước khi lấy
    if (response) {
      setListOrders(response)
      console.log("List orders :", listorders)

    } else {
      alert('No have orders')
    }

  }

  //New Orders
  const onSubmitCreateOrders = async (data) => {
    try {
      const response = await postAPI(API_SEVER_ORDER, data)


      if (response) {
        alert("+1 Orders")

      }
    } catch (error) {
      console.log("Your error :", error)
    }


    console.log("Your orders", data)





  }

  //Change status
  const changeOrdersStatus = async (data) => {
    try {

      const response = await putAPI(API_SEVER_ORDER + `/${data._id}`, data)


      console.log("Response edit :", response)
      if (response && response.status === 200) {
        notify()
        getListOrders()

      }
    } catch (error) {
      console.log("Thất bại  , error :", error)
    }

    console.log("Data edit :", data)




  }

  const OrdersContextData = {
    orders, setOrders, onSubmitCreateOrders,
    getListOrders,
    listorders, setListOrders,
    postOrders, setPostOrders,
    changeOrdersStatus
  }


  //Return provider
  return (
    <OrdersContext.Provider value={OrdersContextData}>
      {children}
    </OrdersContext.Provider>
  )

}



export default OrdersContextProvider