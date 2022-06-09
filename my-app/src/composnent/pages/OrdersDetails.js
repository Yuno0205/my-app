import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAPI, getAPI2 } from '../../utils/api'
import { API_SEVER_ORDER } from '../../utils/const'
import './styleOD.css'

const OrdersDetails = () => {


    const [detailorders, setDetailOrders] = useState([] || "")

    const { id } = useParams()
    

    const fetchAPI = async () => {
        const result = await getAPI2(API_SEVER_ORDER + `/ordersdetail/${id}`)
        // check dữ dữ liệu trước khi lấy
        
        if (result) {
            setDetailOrders(result)
        } else {
            alert("Lỗi")
        }
    }

    useEffect(() => {
        fetchAPI()
    },[])

    

    
    console.log("Details :" , detailorders)

   
  
    if(detailorders){
       return(
         <div>Ha</div>
       )
    }

                // {detailorders  && detailorders.map((item, index) => {
                //         return (

                //             <div>{item._id}</div>

                //             // <div>
                //             //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                //             //     <body>
                //             //         <div class="container">


                //             //             <article class="cardd">

                //             //                 <div class="card-body">
                //             //                     <h6>Order ID: </h6>
                //             //                     <article class="cardd">
                //             //                         <div class="card-body rowo">
                //             //                             <div class="col"> <strong>Estimated Delivery time:</strong> <br />Date </div>
                //             //                             <div class="col"> <strong>Shipping BY:</strong> <br /> <i class="fa fa-phone"></i>Phone</div>
                //             //                             <div class="col"> <strong>Status:</strong> <br /> Sta</div>
                //             //                             <div class="col"> <strong>Customer :</strong> <br /> Cus </div>
                //             //                         </div>
                //             //                     </article>
                //             //                     <div class="track">
                //             //                         <div class="step active"> <span class="icon"> <i class="fa fa-check"></i> </span> <span class="text">Order confirmed</span> </div>
                //             //                         <div class="step active"> <span class="icon"> <i class="fa fa-user"></i> </span> <span class="text"> Picked by courier</span> </div>
                //             //                         <div class="step"> <span class="icon"> <i class="fa fa-truck"></i> </span> <span class="text"> On the way </span> </div>
                //             //                         <div class="step"> <span class="icon"> <i class="fa fa-box"></i> </span> <span class="text">Ready for pickup</span> </div>
                //             //                     </div>
                //             //                     <hr />

                //             //                     <ul class="rowo">

                //             //                         <li class="col-md-4">
                //             //                             <figure class="itemside mb-3">
                //             //                                 <div class="aside"><img src="https://i.imgur.com/iDwDQ4o.png" class="img-sm border" /></div>
                //             //                                 <figcaption class="info align-self-center">
                //             //                                     <p class="title">KA<br /> Li</p> <span class="text-muted">He</span>
                //             //                                 </figcaption>
                //             //                             </figure>
                //             //                         </li>

                //             //                     </ul>
                //             //                     {/* <hr> <a href="#" class="btn btn-warning" data-abc="true" /> <i class="fa fa-chevron-left"></i> Back to orders</a>  */}
                //             //                 </div>
                //             //             </article>
                //             //         </div>
                //             //     </body>
                //             // </div>


                //         )
                //     })
                // }


            







        

    }




export default OrdersDetails