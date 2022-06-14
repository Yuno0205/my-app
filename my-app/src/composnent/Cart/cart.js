import './cartstyle.css'
import { useGlobalContext } from "../../context/globalContext"
import { Link } from "react-router-dom"
import { getTotalCart } from "../../utils/funtions"
import { decreaseItem, increaseItem, removeCart } from '../../store/actions'
import { useEffect, useState } from 'react'

const Cart = () => {
    const [state, dispatch] = useGlobalContext()
    const { cart } = state

    console.log("state", state.cart)

    const totalPrice = cart.reduce((acc,next)=>acc+=next.quantity*next.price,0)

    console.log("State" , state)


    
    
     
    return (
        
        

        
        <div class="maini">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            <section class="modulee">
                <div class="containern">
                    <div class="roww">
                        <div class="col-sm-6 col-sm-offset-3">
                            <h1 class="modulee-title font-alt">Checkout</h1>
                        </div>
                    </div>
                    <hr class="divider-w pt-20" />
                    <div class="roww">
                        <div class="col-sm-12">
                            <table class="table table-striped table-border checkout-table">
                                <tbody >

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
                                                    <td class="hidden-xs"><a href="#"><img class="imagee" src={item.images} alt="Accessories Pack" /></a></td>
                                                    <td class="productname">
                                                        <h5 class="product-title font-alt">{item.name}</h5>
                                                    </td>
                                                    <td class="hidden-xs">
                                                        <h5 class="product-title font-alt">{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ</h5>
                                                    </td>
                                                    <td>
                                                        <span>{item.quantity} <a onClick={() => dispatch(
                                                            decreaseItem(item)
                                                        )} class="btn__change">
                                                            <i class="fas fa-minus"></i>
                                                        </a>
                                                          <a  onClick={() => dispatch(
                                                            increaseItem(item)
                                                        )} class="btn__change"><i class="fas fa-plus"></i></a>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <h5 class="product-title font-alt">{(item.quantity * item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ</h5>
                                                    </td>
                                                    <td onClick={() => dispatch(
                                                            removeCart({id : item.id})
                                                        ) } class="pr-remove"><a  title="Remove"><i class="fa fa-times"></i></a></td>
                                                </tr>
                                            )
                                        })}

                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="roww">
                        

                        <div class="col-sm-3 col-sm-offset-3">
                            <div class="form-group">
                                <button class="btn btn-block btn-round btn-d pull-right" type="submit"><Link to='/'>Continued shopping</Link></button>
                            </div>
                        </div>
                    </div>
                    <hr class="divider-w" />
                    <div class="roww mt-70">
                        <div class="col-sm-5 col-sm-offset-7">
                            <div class="shop-Cart-totalbox">
                                <h4 class="font-alt">Cart Totals</h4>
                                <table class="table table-striped table-border checkout-table">
                                    <tbody class="body__items">
                                        <tr>
                                            <th>Cart Subtotal :</th>
                                            <td>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                                <Link to='/checkout'><button class="btn btn-lg btn-block btn-round btn-d" type="submit">Proceed to Checkout</button></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}


export default Cart
