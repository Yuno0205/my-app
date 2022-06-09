import React, { useContext, useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'
import Footer from '../container/Footer'
import './checkout.css'
import Header from '../container/Header'
import { LoginContext } from '../../context/LoginContext'
import { OrdersContext } from '../../context/OrdersContext'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const CheckOut = () => {

    
    const navigate = useNavigate()
    const {orders , setOrders ,onSubmitCreateOrders} = useContext(OrdersContext)
    const username = JSON.parse(localStorage.getItem("User")).username
    const id = JSON.parse(localStorage.getItem("User")).id
    const email = JSON.parse(localStorage.getItem("User")).email

    const [state, dispatch] = useGlobalContext()
    const { cart = [] } = state
    var sum = 0;
    // const sumTotal = () => {
    //     for ( var i = 0 ; i < cart.length ; i ++){
    //         sum = sum + cart[i].price * cart[i].quantity
    //         console.log(sum)
    //         return sum
    //     }
    // }
    const totalPrice = cart.reduce((acc,next)=>acc+=next.quantity*next.price,0)
    

    const onSubmitForm = () => {
       
       
        var inputData = document.getElementsByTagName('input')
        // :v Sao code react lai dung DOM the nay?

        var name = inputData[1].value
        var email = inputData[2].value
        var customer = id
        var shipping_address = inputData[4].value
        var phone = inputData[5].value
        var total = inputData[6].value


        
        

        
        
        console.log("Total " , totalPrice)

        var items = [];
        for(var i = 0 ; i < cart.length ; i ++) {
            items.push(cart[i])
        }
      
        console.log("Items " , items)

        console.log("Mail" , email)

        var infoOrders =  {
            name : name,
            customer : customer,
            total : totalPrice ,
            shipping_address : shipping_address,
            phone : phone ,
            email : email,
            items : items 
        }


        console.log("Info orders :" , infoOrders)

        if(name == "" || shipping_address =="" || phone == "" || email == ""){
           alert("Please complete all information !")
           return
        }else{
            onSubmitCreateOrders(infoOrders)
            navigate('/success')
        }

        
        




       
        


    }
    // const newItems = cart.map(item=>item)
    return (


        <div>
            
            <Header></Header>
            <body>

                <h1>Responsive CheckOut Form</h1>
                <div class="rown">
                    <div class="col-75">
                        <div class="containerx">
                           

                                <div class="rown">
                                    <div class="col-50x">
                                        <h3>Billing </h3>
                                        <label ><i class="fas fa-wallet"></i>  Order Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="Fill the order name" defaultValue={username + `'s` + " order"} />
                                        <label ><i class="fa fa-envelope"></i> Email</label>
                                        <input  type="text" id="email" name="email" defaultValue={email || ""}  />
                                        <label ><i class="fa fa-user"></i>  Customer</label>
                                        <input disabled="disabled" type="text" id="city" name="city" defaultValue={username} placeholder="Customer 1" />
                                        <label ><i class="fas fa-map-marked-alt"></i>  Address</label>
                                        <input   type="text" id="adr" name="address" placeholder="Address..." />


                                        <div class="rown">
                                           
                                            <div class="col-50x">
                                                <label > <i class="fas fa-mobile-alt"></i>  Phone</label>
                                                
                                                <input type="text" id="zip" name="phone" placeholder="+84..." />
                                            </div>
                                            <div class="col-50x">
                                                <label ><i class="fas fa-dollar-sign"></i>  Total</label>
                                                <input disabled="disabled" type="total" id="zip" name="zip" placeholder="0" value={totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " VND"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div>
                            <input onClick={() => onSubmitForm()} type="submit" value="Continue to CheckOut" class="btnk" />
                            </div>
                             
                                
                          
                        </div>
                    </div>
                    <div class="col-25">
                        <div class="containerx">
                            <table class="table table-striped table-border checkout-table">
                                <tbody>

                                    <tr>
                                        <th class="hidden-xs">Item</th>
                                        <th>Name</th>
                                        <th class="hidden-xs">Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                    {cart &&
                                        cart.length > 0 &&
                                        cart.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td class="hidden-xs"><a href="#"><img class="imagee" src={item.images} alt="Image" /></a></td>
                                                    <td class="productname">
                                                        <h5 class="product-title font-alt">{item.name}</h5>
                                                    </td>
                                                    <td class="hidden-xs">
                                                        <h5 class="product-title font-alt">{item.price}đ</h5>
                                                    </td>
                                                    <td>
                                                        <span>{item.quantity}</span>
                                                    </td>
                                                    <td>
                                                        <h5 class="product-title font-alt">{item.quantity * item.price}đ</h5>
                                                    </td>
                                                    <td class="pr-remove"><a href="#" title="Remove"><i class="fa fa-times"></i></a></td>
                                                </tr>
                                            )
                                        })}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </body>
            <Footer></Footer>
        </div>
    )
}
export default CheckOut