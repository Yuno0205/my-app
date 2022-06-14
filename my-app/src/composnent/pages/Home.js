import MyProductList from "../../MyProductList"
import React, { useState, useEffect, useContext } from 'react';

import { ProductContext } from '../../context/ProductContext';
import { NotifyContext } from "../../context/NotifyContext";
import Header from "../container/Header";
import Footer from "../container/Footer";
import { getAPI } from '../../utils/api'
import { API_SEVER_PRODUCT } from '../../utils/const'
import { useGlobalContext } from "../../context/globalContext";
import { Pagination } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartReducer } from '../../store/reducers'
import { addCart } from "../../store/actions";





function Home() {
    const notify = () => toast.success("Congratulations! You have successfully added 1 product to your cart!");

    // let {toast} = useContext(NotifyContext)

    // function showSuccessToast() {
    //     try {
    //         toast ({
    //             title : 'Success !',
    //             message : 'Đây là message của toast , message này cho biết Hiền rấc cute :v',
    //             kind: 'success',
    //             duration: 6000
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }


    // }

    const { listcategory, getListProduct, keyword, page,hotpage, handleChangePage,handleChangeHotPage,
         productState: { listproduct, total , hotproduct , totalHot ,flashproduct,totalFlash} ,
          getHotProduct , getFlashProduct } = useContext(ProductContext)
    
    const [cart, setCart] = useState([]);
    const [state, dispatch] = useGlobalContext()

   

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };



    useEffect(() => {
        getListProduct()
        

    }, [keyword, listcategory, page])

    useEffect(() => {
        getHotProduct()
        

    }, [keyword, hotpage])

    useEffect(() => {
       getFlashProduct()
        

    }, [keyword])


    const [decription, setDecription] = useState("Underfoot the Free Metcon 4 features Nike Free technology in the forefoot creates flexibility for sprints and agility training. The cushioning technology features a soft core surrounded by firmer foam for extra stability. Finished with a wide heel and rubber tread in high-wear areas they deliver a stable base for your weights training.")


    console.log("Listttttt product :", listproduct)

    let [index, setIndex] = useState(0) // reload page

    function onClickNext() {
        const slides = document.querySelectorAll('.slide-container');
        if (index == slides.length - 1) {
            setIndex(prevState => 0)
            index = 0
        } else {
            setIndex(prevState => prevState + 1)
            index += 1
        }

        slides[(index == 0) ? slides.length - 1 : index - 1].classList.remove('active');
        // index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active')
    }
    function onClickPrev() {
        const slides = document.querySelectorAll('.slide-container');
        if (index == 0) {
            setIndex(prevState => slides.length - 1)
            index = slides.length - 1
        } else {
            setIndex(prevState => prevState - 1)
            index -= 1
        }

        slides[(index == slides.length - 1) ? 0 : index + 1].classList.remove('active');
        // index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active')
    }



    return (

        <div>

            <Header cart={cart} setCart={setCart} ></Header>

            <section className="home" id="home">

                <div className="slide-container active">
                    <div className="slide">
                        <div className="content">
                            <span>Nike red shoes</span>
                            <h3>Nike metcon shoes</h3>
                            <p>{decription}</p>
                            <a onClick={notify} className="btnn">More infomation</a>

                        </div>
                        <div className="image">
                            <img src="images/home-shoe-1.png" className="shoe" alt="" />
                            <img src="images/home-text-1.png" className="text" alt="" />
                        </div>
                    </div>
                </div>

                <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>Nike blue shoes</span>
                            <h3>Nike metcon shoes</h3>
                            <p>{decription}</p>
                            <a href="#" className="btnn">More infomation</a>
                        </div>
                        <div className="image">
                            <img src="images/home-shoe-2.png" className="shoe" alt="" />
                            <img src="images/home-text-2.png" className="text" alt="" />
                        </div>
                    </div>
                </div>

                <div className="slide-container">
                    <div className="slide">
                        <div className="content">
                            <span>Nike yellow shoes</span>
                            <h3>Nike metcon shoes</h3>
                            <p>{decription}</p>
                            <a href="#" className="btnn">More infomation</a>
                        </div>
                        <div className="image">
                            <img src="images/home-shoe-3.png" className="shoe" alt="" />
                            <img src="images/home-text-3.png" className="text" alt="" />
                        </div>
                    </div>
                </div>

                <div id="prev" className="fas fa-chevron-left" onClick={onClickPrev}></div>
                <div id="next" className="fas fa-chevron-right" onClick={onClickNext}></div>

            </section>


            <section className="service">

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-shipping-fast"></i>
                        <h3>fast delivery</h3>
                        <p>Fast and convenient delivery service brings the best experience to customers.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-undo"></i>
                        <h3>10 days replacements</h3>
                        <p>Committed to 10 days warranty, fast and convenient return and exchange service.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-headset"></i>
                        <h3>24 x 7 support</h3>
                        <p>Always dedicated and enthusiastic to customers with the motto "Customer is always right".</p>
                    </div>

                </div>

            </section>




            <div id='listproducts'>
                <div class="main">
                    <section className='women section' id='women'>

                        <h2 className='section-title'> selling products</h2>

                        <div className='women_container bd-grid'>

                            {hotproduct && hotproduct.length > 0 ? (
                                hotproduct.map((item, index) => {
                                    return (


                                        <MyProductList key={index} {...item} handleClick={handleClick}></MyProductList>


                                    )
                                })
                            ) : (
                                <p style={{ textAlign: "center", color: "#ccc", width: "100%" }}>
                                    data not found
                                </p>
                            )}


                        </div>
                    </section>
                    <Pagination
                        onChange={handleChangeHotPage}
                        style={{ paddingLeft: "43%" }}
                        count={totalHot}
                        color="primary"
                    />
                </div>
            </div>




            <section className="products" id="products">

                <h1 className="heading"> flash <span>sale</span> </h1>

                <div className="box-container">
                    {flashproduct && flashproduct.length > 0 && flashproduct.map((item, index) => {
                        return (
                            <div className="box">
                                <div className="icons">
                                    <a href="#" className="fas fa-heart"></a>
                                    <a href="#" className="fas fa-share"></a>
                                    <a href="#" className="fas fa-eye"></a>
                                </div>
                                <img src={item.images} alt="" />
                                <div className="content">
                                    <h3>{item.name}</h3>
                                    <div className="price">{(item.price * (100 - item.discount) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ  <span>{item.price}đ</span></div>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a onClick={() => {
                                        dispatch(
                                            addCart({

                                                id: item._id,
                                                name: item.name,
                                                price: item.price,
                                                images: item.images.length > 0 ? item.images : "https://via.placeholder.com/300",
                                                quantity: 1,
                                            }),
                                            notify()

                                        )
                                    }} className="btnn">add to cart</a>
                                </div>
                            </div>
                        )
                    })

                    }





                </div>

            </section>
            <Pagination
               
                style={{ paddingLeft: "43%" }}
                count={totalFlash}
                color="primary"
            />



            <section className="featured" id="featured">

                <h1 className="heading"> <span>featured</span> products </h1>

                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            <img src="images/f-img-1.1.png" className="featured-image-1" alt="" />
                            <img src="images/f-img-1.2.png" className="featured-image-1" alt="" />
                            <img src="images/f-img-1.3.png" className="featured-image-1" alt="" />
                            <img src="images/f-img-1.4.png" className="featured-image-1" alt="" />
                        </div>
                        <div className="big-image">
                            <img src="images/f-img-1.1.png" className="big-image-1" alt="" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>new nike airmax shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.</p>
                        <div className="price">1,500,000 VND <span>2,000,000 VND</span></div>
                        <a href="#" className="btnn">add to cart</a>
                    </div>
                </div>

                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            <img src="images/f-img-2.1.png" className="featured-image-2" alt="" />
                            <img src="images/f-img-2.2.png" className="featured-image-2" alt="" />
                            <img src="images/f-img-2.3.png" className="featured-image-2" alt="" />
                            <img src="images/f-img-2.4.png" className="featured-image-2" alt="" />
                        </div>
                        <div className="big-image">
                            <img src="images/f-img-2.1.png" className="big-image-2" alt="" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>new nike airmax shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.</p>
                        <div className="price">1,999,000 VND <span>$3,000,000 VND</span></div>
                        <a href="#" className="btnn">add to cart</a>
                    </div>
                </div>

                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            <img src="images/f-img-3.1.png" className="featured-image-3" alt="" />
                            <img src="images/f-img-3.2.png" className="featured-image-3" alt="" />
                            <img src="images/f-img-3.3.png" className="featured-image-3" alt="" />
                            <img src="images/f-img-3.4.png" className="featured-image-3" alt="" />
                        </div>
                        <div className="big-image">
                            <img src="images/f-img-3.1.png" className="big-image-3" alt="" />
                        </div>
                    </div>
                    <div className="content">
                        <h3>new nike airmax shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <p>Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning. The air compresses on impact and then immediately returns to its original shape and volume, ready for the next impact.</p>
                        <div className="price">2,100,000 VND <span>2,500,000 VND</span></div>
                        <a href="#" className="btnn">add to cart</a>
                    </div>
                </div>

            </section>






            <section className="newsletter">

                <div className="content">
                    <h3>monthly newsletter</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ullam veniam at itaque culpa hic corporis saepe dicta doloremque nihil.</p>
                    <form action="">
                        <input type="email" placeholder="enter your email" className="box" />
                        <input type="submit" value="send" className="btnn" />
                    </form>
                </div>

            </section>


            <Footer></Footer>
            <ToastContainer />

        </div>
    )
}

export default Home