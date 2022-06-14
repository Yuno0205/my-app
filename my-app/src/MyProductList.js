import { useGlobalContext } from './context/globalContext'
import './ListStyle.css'
import { addCart } from './store/actions'
import { ProductContext } from './context/ProductContext'
import { useContext } from 'react'
import {ToastContainer , toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MyProductList = ({ name, description, price, images, _id ,discount}) => {
     

    const [state, dispatch] = useGlobalContext()
    
    const notify = () => toast.success("Congratulations! You have successfully added 1 product to your cart!");

    return (
       
                        <article className='sneaker'>
                            <div className='sneaker_sale'>Hot</div>
                            <img src={images || "images/product-1.png"} alt='' className='sneaker_img' />
                            <span className='sneaker_name'>{name}</span>
                            <span className='sneaker_price'>{(price * (100 - discount) / 100 ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</span>
                            <a  onClick={() => {
                                dispatch(
                                    addCart({
                                       
                                        id: _id,
                                        name,
                                        price : price * (100 - discount) / 100 ,
                                        images:images.length > 0 ? images: "https://via.placeholder.com/300",
                                        quantity: 1,
                                    }), 
                                    notify()
                                    
                                )
                            }} className='button-light'><h2>Add to cart</h2></a>
                        </article>
                  
                    
         


    )
}

export default MyProductList