import React, { useState, useEffect, useContext } from "react"
import '../../App.css';
import Footer from '../container/Footer';
import Header from '../container/Header';
import { getAPI } from '../../utils/api'
import { API_SEVER_PRODUCT } from '../../utils/const'
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

function ListProduct() {
    
    const [categoriesSelected, setCategoriesSelected] = useState([])
    const [category, setCategory] = useState([])
     const { listproduct, keyword, listcategory, page, getListProduct ,getListCategory ,getProductByCategory ,total, handleChangePage} = useContext(ProductContext)
    
     const onChangeSelected = async (value) => {
        console.log("category", value)
        setCategory(value)
      }

      useEffect(() => {
        setTimeout(() => {
          onChangeSelected(categoriesSelected)
        }, 100)
      }, [categoriesSelected])



     useEffect(() => {
        getListProduct()

    }, [keyword, listcategory, page])

  

    useEffect(() => {
        getListCategory()
    }, [])
    

    const handleSelectCate = (value) => {
        
        
        console.log("Select" , value)
        getProductByCategory(value)
    }

    return (
        <div>
            <Header></Header>
            <html>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                <div className='app'>
                    <div className='app__container'>
                        <div className='grid'>
                            <div className='grid__row app__content'>
                                <div className='grid__column-2'>
                                    <nav className='category'>
                                        <h3 className=' category__heading'>
                                            <i className="category__heading-icon fas fa-list"></i>
                                            Danh mục
                                        </h3>
                                        <ul className='category-list'>
                                            {listcategory &&
                                                listcategory.length > 0 &&
                                                listcategory.map((category) => {
                                                    return (
                                                        <li onClick={() => handleSelectCate(category._id)} value={category._id} className='category-item category-item--active'>
                                                            <a  className='category-item__link'>{category.name}</a>
                                                        </li>
                                                    )
                                                })}


                                            
                                        </ul>
                                    </nav>
                                </div>

                                <div className='grid__column-10'>
                                    <div className='home-filter'>
                                        <span className='home-filter__label'>Sắp xếp theo</span>
                                        <button className='home-filter__btn btn'>Phổ biến</button>
                                        <button className='home-filter__btn btn btn-primary'>Mới nhất</button>
                                        <button className='home-filter__btn btn'>Bán chạy</button>

                                        <div className='select-input'>
                                            <span className='select-input__label'>Giá</span>
                                            <i className='select-input__icon fas fa-angle-down'></i>
                                            <ul className='select-input__list' >
                                                <li className='select-input__item'>
                                                    <a href='' className='select-input__link'>Giá thấp đến cao</a>
                                                </li>


                                                <li className='select-input__item'>
                                                    <a href='' className='select-input__link'>Giá cao đến thấp</a>
                                                </li>
                                            </ul>
                                        </div>



                                        <div className='home-filter__page'>
                                            <span className='home-filter__page-num'>
                                                <span className='home-filter__page-current'>1</span>
                                                /14
                                            </span>

                                            <div className='home-filter__page-control'>
                                                <a href='' className='home-filter__page-btn home-filter__page-btn-disable'>
                                                    <i className='home-filter__page-icon fas fa-angle-left'></i>
                                                </a>

                                                <a href='' className='home-filter__page-btn'>
                                                    <i className='home-filter__page-icon fas fa-angle-right'></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='home-product'>
                                        <div className='grid__row '>
                                            {listproduct &&
                                                listproduct.length &&
                                                listproduct.map((item, index) => {
                                                    return (

                                                        <div className='grid_column-2-4 ' key={index}>
                                                            <Link style={{textDecoration : 'none'}} to={`/product/${item._id}`}>
                                                                <div className='home-product-item'>
                                                                    <div className='home-product-item__img' style={{ backgroundImage: `url(${item.images})` }}></div>
                                                                    <h4 className='home-product-item__name'>{item.name}</h4>
                                                                    <div className='home-product-item__price'>
                                                                        <span className='home-product-item__price-old'>900,000đ</span>
                                                                        <span className='home-product-item__price-current'>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}đ</span>
                                                                    </div>
                                                                    <div className='home-product-item__action'>
                                                                        <span className='home-product-item__like home-product-item__like--liked'>
                                                                            <i className="home-product-item__like-icon-empty far fa-heart"></i>
                                                                            <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                                                                        </span>
                                                                        <div className="home-product-item__rating">
                                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                                            <i className="fas fa-star"></i>
                                                                        </div>
                                                                        {/* <span className='home-product-item__sold'>Size : {item.size + ","}</span> */}
                                                                    </div>
                                                                    <div className='home-product-item__origin'>
                                                                        <span className='home-product-item__brand'>{item.category.name}</span>
                                                                        <span className='home-product-item__origin-title'>Color : {item.color || "No"}</span>
                                                                    </div>
                                                                    <div className='home-product-item__favourite'>
                                                                        <i className='fas fa-check'></i>
                                                                        <span>Yêu thích</span>
                                                                    </div>
                                                                    <div className='home-product-item__sale-off'>
                                                                        <span className='home-product-item__sale-off-percent'>43%</span>
                                                                        <span className='home-product-item__sale-off-lable'>GIẢM</span>
                                                                    </div>
                                                                </div>
                                                            </Link>


                                                        </div>
                                                    )
                                                })}



                                            {/* Product item */}


                                            <div className='grid_column-2-4'>
                                                <div className='home-product-item'>
                                                    <div className='home-product-item__img' style={{ backgroundImage: ' url("https://cf.shopee.vn/file/e264fd15de3a7e5c61a99c65df61d91b")' }}></div>
                                                    <h4 className='home-product-item__name'>Giày Air Force 1 All White S.Cấp nguyên bản cho nam nữ, Present Original Sneaker</h4>
                                                    <div className='home-product-item__price'>
                                                        <span className='home-product-item__price-old'>1.200.000đ</span>
                                                        <span className='home-product-item__price-current'>990.000đ</span>
                                                    </div>
                                                    <div className='home-product-item__action'>
                                                        <span className='home-product-item__like home-product-item__like--liked'>
                                                            <i className="home-product-item__like-icon-empty far fa-heart"></i>
                                                            <i className="home-product-item__like-icon-fill fas fa-heart"></i>
                                                        </span>
                                                        <div className="home-product-item__rating">
                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                            <i className="home-product-item__star--gold fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <span className='home-product-item__sold'>Đã bán 19</span>
                                                    </div>
                                                    <div className='home-product-item__origin'>
                                                        <span className='home-product-item__brand'>Whoo</span>
                                                        <span className='home-product-item__origin-title'>Nhật Bản</span>
                                                    </div>
                                                    <div className='home-product-item__favourite'>
                                                        <i className='fas fa-check'></i>
                                                        <span>Yêu thích</span>
                                                    </div>
                                                    <div className='home-product-item__sale-off'>
                                                        <span className='home-product-item__sale-off-percent'>43%</span>
                                                        <span className='home-product-item__sale-off-lable'>GIẢM</span>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>

                                    <Pagination
                                onChange={handleChangePage}
                                style={{ paddingLeft : "50%"}}
                                count={total}
                                color="primary"
                            />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </html>
            <Footer></Footer>
        </div>
    );
}

export default ListProduct;
