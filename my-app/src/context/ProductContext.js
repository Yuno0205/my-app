import React, { createContext, useEffect, useReducer, useState } from 'react'
import { deleteAPI, getAPI, postAPI, postAPIProduct, putAPI } from '../utils/api'
import { API_SEVER_CATEGORY, API_SEVER_PRODUCT } from '../utils/const'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productReducer } from '../reducer/productReducer';
import { CHANGEHOTPAGE, CHANGEPAGE, GETFLASHPRODUCT, GETHOTPRODUCT, GETPRODUCTBYCATE, SETLISTPRODUCT } from '../constants';

export const ProductContext = createContext()


const ProductContextProvider = ({ children, item }) => {
  const notifyError = () => toast.error("Oops ! Looks like something went wrong!");

  const notifyCate1 = () => toast.success("Successfully added 1 category !");
  const notifyCate2 = () => toast.info("Successfully updated 1 category !");
  const notifyCate3 = () => toast.warning("Successfully deleted 1 category !");

  const notifyPro1 = () => toast.success("Successfully added 1 product !");
  const notifyPro2 = () => toast.info("Successfully updated 1 product !");
  const notifyPro3 = () => toast.warning("Successfully deleted 1 product !");

  //State
  const [data, setData] = useState([])
  const [listproduct, setListProduct] = useState([])
  const [listcategory, setListCategory] = useState([])
  const [isFetchData, setIsFetchData] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [hotpage, setHotPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 10
  const hotLimit = 4

  const [productState, dispatch] = useReducer(productReducer, {
    data: [],
    listproduct: [],
    hotproduct : [],
    flashproduct: [],
    listcategory: [],
    keyword: "",
    loading: true,
    page: 1,
    total: 0,
    totalHot : 0,
    totalFlash : 0,
    limit: 8
  })



  //State của category
  const [post, setPost] = useState({
    name: '',
    description: ''
  })


  const [postEdit, setPostEdit] = useState({
    _id: '',
    name: '',
    description: ''
  })

  //State của product
  const [postProduct, setPostProduct] = useState({
    name: '',
    price: '',
    color: '',
    size: [],
    category: '',
    images: '',
    discount: 0
  })

  const [selectedPost, setSelectedPost] = useState(undefined)




  //Function
  //onChange text trong input

  const onChangeText = (event) => {

    setPost({ ...post, [event.target.name]: event.target.value })
  }

  const onChangeTextProduct = (event) => {

    setPostProduct({ ...postProduct, [event.target.name]: event.target.value })
  }

  //Check post selected
  const onEdit = async (post) => {


    setSelectedPost(post)
    setPostEdit(post)

   
  }


  // Get list product
  const getListProduct = async () => {

    const response = await getAPI(API_SEVER_PRODUCT, {
      keyword,
      limit,
      page,
    })
    
    if (response?.data) {
      dispatch({
        type: SETLISTPRODUCT,
        payload: { listproduct: response?.data  , total : response?.totalPage}
      })
      return response.data
    }


    // check dữ dữ liệu trước khi lấy
    if (response) {
      // setListProduct(response?.data)
      setTotal(response?.totalPage)
      setLoading(false)
    }



  }


  const getHotProduct = async () => {

    const response = await getAPI(API_SEVER_PRODUCT + '/hot', {
      keyword,
      hotLimit,
      hotpage,
    })
    
    if (response?.data) {
      dispatch({
        type: GETHOTPRODUCT,
        payload: { hotproduct : response?.data  , totalHot : response?.totalPage}
      })
      return response.data
    }


    


    // check dữ dữ liệu trước khi lấy
    if (response) {
      // setListProduct(response?.data)
      setTotal(response?.totalPage)
      setLoading(false)
    }



  }

  const getFlashProduct = async () => {

    const response = await getAPI(API_SEVER_PRODUCT + '/flash', {
      keyword,
      limit,
      
    })
    console.log("response fl :" , response)
    if (response?.data) {
      dispatch({
        type: GETFLASHPRODUCT,
        payload: { flashproduct : response?.data  , totalFlash : response?.totalPage}
      })
      return response.data
    }


    


    // check dữ dữ liệu trước khi lấy
    if (response) {
      // setListProduct(response?.data)
      setTotal(response?.totalPage)
      setLoading(false)
    }



  }


  //Show by Category
  const getProductByCategory = async (id) => {

    const response = await getAPI(API_SEVER_PRODUCT + '/bycate/' + id  )
  
    // check dữ dữ liệu trước khi lấy
    if (response) {
      dispatch({
        type: GETPRODUCTBYCATE,
        payload: { listproduct: response  , total : response.totalPage}
      })
    } else {
      alert('Error')
    }





  }


  // Create product 
  const onSubmitCreateProduct = async (post) => {
    try {
      const response = await postAPI(API_SEVER_PRODUCT, post)


      if (response) {
        notifyPro1()
        getListProduct()

      }
    } catch (error) {
      console.log("Your error :", error)
    }

   

  }

  //Deltete product
  const deleteProduct = async (id) => {
    try {

      const response = await deleteAPI(API_SEVER_PRODUCT + `/${id}`)

      console.log("Delete :", response)
      if (response && response.status === 200) {
        notifyPro3()
        getListProduct()
      }
    } catch (error) {
      console.log("Cant delete product , error :", error)
    }

  

  }

  //Edit Product
  const editProduct = async (data) => {
    try {

      const response = await putAPI(API_SEVER_PRODUCT + `/${data._id}`, data)


    
      if (response && response.status === 200) {
        notifyPro2()
        getListProduct()

      }
    } catch (error) {
      console.log("Cant edit category , error :", error)
    }

    console.log("Data edit :", data)




  }

  //Get Category
  const getListCategory = async () => {

    const response = await getAPI(API_SEVER_CATEGORY)
  
    // check dữ dữ liệu trước khi lấy
    if (response) {
      setListCategory(response.data)
    } else {
      alert('No have category')
    }


  }


  //Create category
  const onSubmitCreate = async (post) => {
    try {
      const response = await postAPI(API_SEVER_CATEGORY, post)
      if (response) {
        notifyCate1()
        getListCategory()
      }
    } catch (error) {
      notifyError()
      console.log("Your error :", error)
    }

  }


  //Delete Category 
  const deleteCategory = async (id, e) => {
    try {

      const response = await deleteAPI(API_SEVER_CATEGORY + `/${id}`)

     
      if (response && response.status === 200) {
        // alert("Xóa thành công category với ID :", { id })
        notifyCate3()
        getListCategory()
      }
    } catch (error) {
      console.log("Cant delete category , error :", error)
    }

  }

  //Edit Category
  const editCategory = async (data) => {
    try {

      const response = await putAPI(API_SEVER_CATEGORY + `/${data._id}`, data)

      console.log("Response edit :", response)
      if (response && response.status === 200) {
        notifyCate2()
        getListCategory()
      }
    } catch (error) {
      console.log("Cant edit category , error :", error)
    }




  }


  //Change page
  const handleChangePage = (event, value) => {
    setPage(value)
    dispatch({
      type: CHANGEPAGE,
      payload: { page : value }
    })
  }

  const handleChangeHotPage = (event, value) => {
    setHotPage(value)
    dispatch({
      type: CHANGEHOTPAGE,
      payload: { hotpage : value }
    })
  }

  //Search
  const handleSearch = (e) => {

    setKeyword(e.target.value)

  }

  const sortAsc = () => {
    const products = getListProduct()

    
    products.then(result => result).then(result => {

      let asc = result.sort((a, b) => a.price - b.price)
      
      dispatch({
        type: SETLISTPRODUCT,
        payload: { listproduct: asc }
      })
    })

  }


  const sortDesc= () => {
    const products = getListProduct()

    
    products.then(result => result).then(result => {

      let desc = result.sort((a, b) => b.price - a.price)
      
      dispatch({
        type: SETLISTPRODUCT,
        payload: { listproduct: desc }
      })
    })

  }
  


  //Data
  const ProductContextData = {
    selectedPost, setSelectedPost,
    onEdit,
    listproduct, setListProduct,
    post, setPost,
    postEdit, setPostEdit,
    postProduct, setPostProduct,
    listcategory, setListCategory,
    keyword, setKeyword,
    loading, setLoading,
    page, setPage,hotpage,setHotPage,
    total, setTotal,
    limit,
    getListProduct,
    getListCategory,
    handleChangePage,handleChangeHotPage,
    handleSearch,
    onChangeText,
    onChangeTextProduct,
    onSubmitCreate,
    deleteCategory,
    editCategory,
    onSubmitCreateProduct,
    deleteProduct,
    editProduct,
    getProductByCategory,
    sortAsc,sortDesc,
    getHotProduct,
    getFlashProduct,
    productState

  }


  //Return provider
  return (
    <ProductContext.Provider value={ProductContextData}>
      {children}
    </ProductContext.Provider>

  )


}



export default ProductContextProvider