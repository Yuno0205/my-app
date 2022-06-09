import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import { getAPI } from '../../utils/api'
import { API_SEVER_PRODUCT } from '../../utils/const'
import Header from '../container/Header'
import Footer from '../container/Footer'
import './styleOD.css'
import { addCart } from '../../store/actions'
const DetailsProduct = () => {
    const [state, dispatch] = useGlobalContext()

    const [product, setProduct] = useState([])

    const { id } = useParams()
    useEffect(() => {
        fetchAPI()
    }, [product])

    const fetchAPI = async () => {
        const result = await getAPI(API_SEVER_PRODUCT + `/${id}`)
        // check dữ dữ liệu trước khi lấy
        console.log("Data ", result)
        if (result) {
            setProduct(result)
        }
    }

    if (product) {
        return (
            <div>
                <Header></Header>
                <div class="infomation">
                    <div class='containera'>
                        <div class="rowa">
                            <div class="col-sm-6 mb-sm-40"><a class="gallery" href="#"><img class='details_img' src={product.images} /></a>

                            </div>
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h1 class="product-title font-alt">{product.name}</h1>
                                    </div>
                                </div>
                                <div class="row mb-20">
                                    <div class="col-sm-12"><span><i class="fa fa-star star"></i></span><span><i class="fa fa-star star"></i></span><span><i class="fa fa-star star"></i></span><span><i class="fa fa-star star"></i></span><span><i class="fa fa-star star-off"></i></span><a class="open-tab section-scroll" href="#reviews">ID :{product._id}</a>
                                    </div>
                                </div>


                                <div class="row mb-20">
                                    <div class="col-sm-12">
                                        <div class="price font-alt"><span class="amount">Color : {product.color}</span></div>
                                    </div>
                                </div>
                                <div class="row mb-20">
                                    <div class="col-sm-12">
                                        <div class="price font-alt"><span class="amount">Price :   {product.price}đ</span></div>
                                    </div>
                                </div>
                                <div class="row mb-20">
                                    <div class="col-sm-12">
                                        <div class="description">
                                            <p>Decription : The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-20">

                                    <div onClick={() => dispatch(
                                        addCart({
                                            id: product._id,
                                            name : product.name,
                                            price : product.price,
                                            images: product.images.length > 0 ? product.images : "https://via.placeholder.com/300",
                                            quantity: 1,
                                        })
                                    )} class="col-sm-8"><a class="btnn " >Add To Cart</a></div>
                                </div>
                                <div class="row mb-20">
                                    <div class="col-sm-12">
                                        <div class="product_meta">Categories:  <a >   {product.category}</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-8"><Link class="btnn " to="/product">Back</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        )
    }


}

export default DetailsProduct