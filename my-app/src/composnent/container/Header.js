import { useContext, useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext'
import { LoginContext } from '../../context/LoginContext'
import { useGlobalContext } from "../../context/globalContext"
import { removeCart } from '../../store/actions'

function Header() {

    const { handleSearch } = useContext(ProductContext)

    const [user, setUser] = useState(localStorage['User'] ? JSON.parse(localStorage['User']) : { username: 'Đăng nhập', role: 'user', img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' })

    const [state, dispath] = useGlobalContext()
    const { cart } = state

    if (localStorage['User']) {

        const role = JSON.parse(localStorage.getItem("User")).role
        const username = JSON.parse(localStorage.getItem("User")).username
        const id = JSON.parse(localStorage.getItem("User")).id


    } else {
        localStorage.setItem('User', JSON.stringify({ username: 'Normal user', role: "user", img: "" }));

    }

    


    const signOut = () => {
        localStorage.clear()
    }

    const checkItem = cart.length



    return (


        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <header>

                <div id="menu-bar" className="fas fa-bars"></div>

                <a href="/" className="logo"  >
                    Nike
                </a>

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/product">List product</Link>

                   { user.role =="admin" ?  < Link to="/dashboard">Dashboard</Link> : ""}

                   

                    <Link to="/checkout">Check Out</Link>
                   
                </nav>

                <div className='header__search'>
                    <div class="header__search-box">
                        <input onChange={(e) => handleSearch(e)} class="header__search-box-text" type="text" name="" placeholder="Type to search" />
                        <a class="header__search-box-btn" href="#">
                            <i className='fas fa-search'></i>
                        </a>
                    </div>
                </div>

                <div className="icons">
                    <a href="favorite" className="fas fa-heart"></a>

                    {/* Cart */}

                    <div className='header__cart'>

                        <Link to='/cart' className='header__cart-icon fas fa-shopping-cart'></Link>

                        <span className='header__cart-notice'>{checkItem}</span>
                        {/* No cart : header__cart-list--no-cart */}
                        <div className={checkItem > 0 ? "header__cart-list" : 'header__cart-list header__cart-list--no-cart'}>
                            <img src='images/no-cart.jpg' className='header__cart-no-cart-img'></img>

                            <span className='header__cart-list-no-cart-msg'>No products yet</span>

                            <h4 className='header__cart-heading'>{checkItem > 0 ? "Added product" : ""}</h4>
                            <ul className='header__cart-list-item'>
                                {cart ? (
                                    cart.map((item, index) => {
                                        return (
                                            <li className='header__cart-item'>
                                                {/* Cart item */}
                                                <img src={item.images} alt='' className='header__cart-img'></img>
                                                <div className='header__cart-item-info'>
                                                    <div className='header__cart-item-head'>
                                                        <h5 className='header__cart-item-name'>{item.name}</h5>
                                                        <div className='header__cart-item-price-wrap'>
                                                            <span className='header__cart-item-price'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ </span>
                                                            <span className='header__cart-item-multiply'>x</span>
                                                            <span className='header__cart-item-qnt'>{item.quantity}</span>
                                                        </div>
                                                    </div>

                                                    <div className='header__cart-item-body'>
                                                        <span className='header__cart-item-description'> Category : Sneaker </span>
                                                        <span onClick={() => dispath(
                                                            removeCart({id : item.id})
                                                        ) } className='header__cart-item-remove'>Delete</span>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                ) : ""}



                            </ul>
                            {/* Sau này chuyển button thành thẻ a để chuyển trang */}
                            {checkItem > 0 ? <Link  to="/cart" className='header__cart-view-cart btn btn--primary'>View cart</Link> : ""}
                        </div>
                    </div>
                    {/* <a href="user" className="fas fa-user"></a> */}
                    <Link to="/login">
                        <li className='header__navbar-item header__navbar-user'>
                            <img src={user.img || "https://mpng.subpng.com/20180411/rzw/kisspng-user-profile-computer-icons-user-interface-mystique-5aceb0245aa097.2885333015234949483712.jpg"} className='header__navbar-user-img'></img>
                            <span className='header__navbar-user-name'>{user.username}</span>

                            <ul className='header__navbar-user-menu'>
                                <li className='header__navbar-user-item'>
                                    <Link to="/*" className='header__navbar-user-item-name' > My Account</Link>

                                </li>

                                <li className='header__navbar-user-item'>
                                    <Link to="/*" className='header__navbar-user-item-name' > My Orders</Link>

                                </li>

                                <li className='header__navbar-user-item'>
                                    <Link className='header__navbar-user-item-name' to='/*'>Purchase history</Link>

                                </li>

                                <li className='header__navbar-user-item'>
                                    <Link to="/login" className='header__navbar-user-item-name'  onClick={signOut}>Log out</Link>

                                </li>
                            </ul>
                        </li>
                    </Link>

                </div>




            </header>
        </div>
    )
}

export default Header