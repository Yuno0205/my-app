import { useEffect, useContext } from 'react';
import Navigation from './Navigation';
import './styleDash.css'
import { ProductContext } from '../../context/ProductContext';
import { Pagination } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const addProduct = () => {
    let modal = document.querySelector('.modal')
    modal.classList.toggle('show')
}


const hiddenForm = () => {
    let modalA = document.querySelector('.modal.show')
    modalA.classList.remove('show')
}


function getSelectedCate() {
    var selectedValue = document.getElementById('listcate').value
    console.log("Category", selectedValue)
}


function ProductDash() {

    const { listproduct, listcategory, keyword, page,
        getListProduct, handleChangePage,total, getListCategory, 
        postProduct, setPostProduct, onEdit, selectedPost,
        onSubmitCreateProduct, onChangeTextProduct, deleteProduct , editProduct } = useContext(ProductContext)

        const warn = () => toast.warn("Please fill all fields !");
        const warn1 = () => toast.warn("Please choose at least 1 size for the product !");
        const warn3 = () => toast.warn("Invalid money input ! Please check again !");
        const success = () => toast.success("Successfully created 1 product !");
        const error = () => toast.error("Successfully deleted 1 product !");

    const onSubmitForm = () => {
        // if (postProduct.name && postProduct.price && postProduct.images) {
        //     onSubmitCreateProduct(postProduct)
        //     hiddenForm()
        //     getListProduct()
        // }else{
        //     alert("bạn chưa nhập đủ thông tin")
        // }

        var inputData = document.getElementsByTagName('input')


        var name = inputData[0].value
        var price = inputData[1].value
        var images = inputData[15].value

        var selectedCategory = document.getElementById('listcate').value


        var color1 = inputData[2].checked
        var color2 = inputData[3].checked
        var color3 = inputData[4].checked
        var color4 = inputData[5].checked

        var check1 = inputData[6].checked;
        var check2 = inputData[7].checked;
        var check3 = inputData[8].checked;
        var check4 = inputData[9].checked;
        var check5 = inputData[10].checked;
        var check6 = inputData[11].checked;
        var check7 = inputData[12].checked;
        var check8 = inputData[13].checked;
        var check9 = inputData[14].checked;

        var color = ""





        if (color1) {
            color = "Black"
        } else if (color2) {
            color = "White"
        }
        else if (color3) {
            color = "Red"
        } else {
            color = "Other"
        }


        console.log("Kiểu :", typeof (color))
        console.log("Kiểu cate:", typeof (selectedCategory))



        if (name == "" || price == "" || images == "") {
            warn()
            return
        }

        var arrSize = [];

        for (var i = 6; i <= 14; i++) {
            if (inputData[i].checked) {

                arrSize.push(inputData[i].value)
                console.log(inputData[i].value)
            }
        }



        if (isNaN(price)) {
           warn3()
            return;
        }

        if (check1 || check2 || check3 || check4 || check5 || check6 || check7) {

        } else {
            warn1()
            return
        }



        const infoData = {
            name: name,
            price: price,
            color: color,
            size: arrSize,
            category: selectedCategory,
            images: images

        }

       

        onSubmitCreateProduct(infoData)

        console.log("all data info :", infoData)

        hiddenForm()
        getListProduct()


    }

    const onClickEdit = (post) => {
        addProduct()
        onEdit(post)  
        console.log("Data post" ,post)
        setPostProduct(post)
    }
    const onEditProduct = (post) => {
        if(post.name == "" || post.price == "" || post.images =="" || post.color == "" || post.category == "" || post.size.length < 1){
           warn()
           return
        }else{
            editProduct(post)
            hiddenForm()
        }

    }



    useEffect(() => {
        getListProduct()

    }, [keyword, listcategory, page])

    useEffect(() => {
        getListCategory()

    }, [])

    return (
        <div >
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>

            <body>
                <div class="containerr">
                    <Navigation></Navigation>

                    <div className='mainn'>
                        <div className='test1'>List product</div>
                        <div className='add__product'>
                            <button onClick={addProduct} className='btna'>
                                <a >Add product</a>
                                <i class="far fa-plus-circle"></i>
                            </button>
                            <ToastContainer/>
                        </div>


                        <div className='list'>
                            <table>
                                <thead>
                                    <tr>
                                        <td className='Btext'>ID</td>
                                        <td className='Btext'>Name</td>
                                        <td className='Btext'>Price</td>
                                        <td className='Btext'>Color</td>
                                        <td className='Btext'>Size</td>
                                        <td className='Btext'>Category</td>
                                        <td className='Btext'>Action</td>

                                    </tr>
                                </thead>
                                <tbody>
                                    {listproduct && listproduct.length && listproduct.map((item, index) => {
                                        return (

                                            <tr >
                                                <td>#{item._id}</td>
                                                <td>
                                                    <div className='bxImg'>
                                                        <img src={item.images|| "https://us.123rf.com/450wm/urfandadashov/urfandadashov1806/urfandadashov180601827/150417827-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg?ver=6"}></img>
                                                        <span>{item.name}</span>
                                                    </div>



                                                </td>
                                                <td>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND</td>
                                                <td>{item.color || "No"} </td>
                                                <td>{item.size.join(",")}</td>
                                                <td><span className='status delivered'>{item.category.name || "No"}</span></td>
                                                <td>
                                                    <i onClick={() => onClickEdit(item )} style={{ marginRight: '10px' }} class="fas fa-tools"></i>
                                                    <i onClick={() => deleteProduct(item._id )} class="fas fa-trash"></i>
                                                </td>

                                            </tr>

                                        )
                                    })}


                                </tbody>
                            </table>
                            <Pagination
                                onChange={handleChangePage}
                                style={{ paddingLeft: "50%" }}
                                count={total}
                                color="primary"
                            />
                        </div>

                    </div>


                </div>

                {/* Modal layout */}

                <div className='modal'>
                    <div className='modal__overlay'>

                    </div>
                    <div className='modal__body'>

                        <div className='auth-form'>
                            <div className='auth-form__container'>
                                <div className='auth-form__header'>
                                    <h3 className='auth-form__heading'>Product info</h3>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product name</label>
                                        <input value={postProduct.name} onChange={onChangeTextProduct} type="text" className='auth-form__input' name='name' placeholder='   Product name'></input>
                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product price</label>
                                        <input value={postProduct.price} onChange={onChangeTextProduct} type="text" className='auth-form__input' name='price' placeholder='   Product price'></input>
                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product category</label>
                                        <select id='listcate' onChange={() => getSelectedCate} className='auth-form__input' >
                                            {listcategory && listcategory.length > 0 ? (
                                                listcategory.map((item, index) => {
                                                    return (

                                                        <option value={item._id} name='category'>{item.name}</option>

                                                    )
                                                })
                                            ) : (
                                                <p style={{ textAlign: "center", color: "#ccc", width: "100%" }}>
                                                    data not found
                                                </p>
                                            )}

                                        </select>




                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product color</label>
                                        <div className='auth-form__radio'>
                                            <input type="radio" id="html" name="color" value={postProduct.color} />
                                            <label for="html">Black</label><br />
                                            <input type="radio" id="css" name="color" value="CSS" />
                                            <label for="css">White</label><br />
                                            <input type="radio" id="javascript" name="color" value="JavaScript" />
                                            <label for="javascript">Red</label>
                                            <input type="radio" id="javascript" name="color" value="JavaScript" />
                                            <label for="javascript">Other</label>
                                        </div>
                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product size</label>
                                        <div className='auth-form__checkboxs'>
                                            <input onChange={onChangeTextProduct} type="checkbox" className='auth-form__checkbox' name="size" value="35" /><label >35</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="36" /><label >36</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="37" /><label >37</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="38" /><label >38</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="39" /><label >39</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="40" /><label >40</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="41" /><label >41</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="42" /><label >42</label><br />
                                            <input type="checkbox" className='auth-form__checkbox' name="action" value="43" /><label >43</label><br />

                                        </div>

                                    </div>

                                </div>

                                <div className='auth-form__form'>
                                    <div className='auth-form__group'>
                                        <label className='auth-form__label'>Product image</label>
                                        <input value={postProduct.images} onChange={onChangeTextProduct} type="text" className='auth-form__input' name='images' placeholder='   Product image'></input>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='auth-form__controls'>
                            <button onClick={hiddenForm} className='btnd auth-form__controls-back'>Hủy</button>
                            {!selectedPost && <button onClick={() => onSubmitForm()} className='btnd btn--primary'>Xác nhận</button>}
                            {selectedPost && <button onClick={() => onEditProduct(postProduct)} className='btnd btn--primary'>Cập nhật</button>}
                        </div>

                    </div>
                </div>
            </body>
        </div>
    );
}

export default ProductDash;
